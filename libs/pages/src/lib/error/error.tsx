import { Logo } from '@components';
import { usePortfolio } from '@hooks';
import { cn } from '@styles';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

export type ErrorProps = React.ComponentPropsWithoutRef<'div'> & {
    error: string;
};

export const Error: NextPage<ErrorProps> = ({ error, ...props }) => {
    const router = useRouter();
    const { greeting } = usePortfolio();
    return (
        <div
            onClick={() => router.push('/')}
            className={cn('m-0 flex h-screen w-screen cursor-pointer flex-col items-center justify-center p-0')}
            {...props}
        >
            <Logo name={greeting.name} className={cn('hover:bg-white dark:hover:bg-dimmed-900')} />
            <h1 className={cn('text-9xl')}>{error}</h1>
        </div>
    );
};

export default Error;
