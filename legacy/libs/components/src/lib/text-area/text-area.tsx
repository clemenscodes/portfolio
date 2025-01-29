import { cn } from '@styles';
import * as React from 'react';
import { forwardRef } from 'react';

export type TextAreaProps = React.ComponentPropsWithoutRef<'textarea'>;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                className={cn(
                    'flex min-h-[80px] w-full px-3 py-2',
                    'rounded-md border text-sm',
                    'border-input ring-offset-background bg-transparent',
                    'placeholder:text-muted-foreground',
                    'focus-visible:ring-ring focus-visible:outline-none ',
                    'focus-visible:ring-2 focus-visible:ring-offset-2',
                    'disabled:cursor-not-allowed disabled:opacity-50',
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
TextArea.displayName = 'TextArea';
