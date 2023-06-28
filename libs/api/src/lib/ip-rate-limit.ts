import { initRateLimit, CountFn } from './rate-limit';
import type { NextApiRequest } from 'next';

export default function getIP(request: NextApiRequest) {
    if (!('x-forwarded-for' in request.headers)) {
        return '127.0.0.1';
    }

    const xff = request.headers['x-forwarded-for'];

    if (!xff || xff instanceof Array) {
        return '127.0.0.1';
    }

    return xff ? xff.split(',')[0] : '';
}

export const ipRateLimit = initRateLimit((request) => ({
    id: `ip:${getIP(request)}`,
    count: increment,
    limit: 5,
    timeframe: 10,
}));

const ipStore = new Map<string, number>();

const increment: CountFn = async ({ key, limit }) => {
    const oldRemaining = ipStore.get(key);
    if (oldRemaining === undefined) {
        ipStore.set(key, limit);
        return limit;
    }
    const newRemaining = oldRemaining - 1;
    ipStore.set(key, newRemaining);
    return newRemaining;
};
