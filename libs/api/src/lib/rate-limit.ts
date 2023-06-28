import { type NextApiRequest, type NextApiResponse } from 'next';

export interface RateLimitContextBase {
    id: string;
    limit: number;
    timeframe: number;
    count: CountFn;
}

export interface RateLimitContext extends RateLimitContextBase {
    request: NextApiRequest;
    response: NextApiResponse;
    headers: readonly [string | null, string | null, string | null];
    onRateLimit: OnRateLimit;
}

export type RateLimitHandler = (
    request: NextApiRequest,
    response?: NextApiResponse
) => Promise<RateLimitResult> | RateLimitResult;

export type RateLimitResult = RateLimitContextBase & {
    request?: NextApiRequest;
    response?: NextApiResponse;
    headers?: RateLimitHeaders;
    onRateLimit?: OnRateLimit;
};

export type RateLimitHeaders = null | string | readonly [string | null, string | null, string | null];

export type OnRateLimit = (context: RateLimitContext) => NextApiResponse | Promise<NextApiResponse>;

export type CountFn = (context: RateLimitContext & { key: string }) => Promise<number>;

const rateLimited: OnRateLimit = ({ id, response }) => {
    response.status(429).json({
        error: { message: `API rate limit exceeded for ${id}` },
    });
    return response;
};

function getHeaders(nameOrHeaders?: RateLimitHeaders) {
    nameOrHeaders = nameOrHeaders ?? 'RateLimit';
    return !nameOrHeaders || typeof nameOrHeaders === 'string'
        ? ([`X-${nameOrHeaders}-Limit`, `X-${nameOrHeaders}-Remaining`, `X-${nameOrHeaders}-Reset`] as const)
        : nameOrHeaders;
}

async function rateLimit(context: RateLimitContext): Promise<NextApiResponse> {
    const { headers, id, limit, timeframe, count, onRateLimit, response } = context;

    // By removing the milliseconds our of the date and dividing by `timeframe`
    // we now have a time that changes every `timeframe` seconds
    const time = Math.floor(Date.now() / 1000 / timeframe);
    const key = `${id}:${time}`;
    const remaining = await count({ ...context, key });
    const reset = (time + 1) * timeframe;
    const h = new Headers();

    if (headers[0]) h.set(headers[0], `${limit}`);
    if (headers[1]) h.set(headers[1], `${remaining < 0 ? 0 : remaining}`);
    if (headers[2]) h.set(headers[2], `${reset}`);

    if (remaining < 0) {
        const res = await onRateLimit(context);
        return res;
    }

    // Add the headers to the response in context
    h.forEach((value, key) => {
        response.setHeader(key, value);
    });

    return response;
}

export const initRateLimit = (fn: RateLimitHandler) =>
    async function isRateLimited(request: NextApiRequest, response: NextApiResponse) {
        const ctx = await fn(request);
        return rateLimit({
            ...ctx,
            request: request,
            response: response,
            headers: getHeaders(ctx.headers),
            onRateLimit: ctx.onRateLimit ?? rateLimited,
        });
    };
