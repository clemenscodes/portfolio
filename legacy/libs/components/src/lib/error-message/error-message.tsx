import { cn } from '@styles';
import { forwardRef } from 'react';

export type ErrorMessageProps = React.ComponentPropsWithRef<'p'>;

export const ErrorMessage: React.FC<ErrorMessageProps> = forwardRef<
    HTMLParagraphElement,
    ErrorMessageProps
>(({ className, children, ...props }, ref) => {
    return (
        <p
            ref={ref}
            className={cn(
                'text-destructive text-sm font-medium text-red-500',
                className
            )}
            {...props}
        >
            {children}
        </p>
    );
});
ErrorMessage.displayName = 'ErrorMessage';
