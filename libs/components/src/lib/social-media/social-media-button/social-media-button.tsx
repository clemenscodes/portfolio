import { cn } from '@styles';
import Image, { ImageProps } from 'next/image';
import Link, { LinkProps } from 'next/link';

export type SocialMediaButtonProps =
    React.ComponentPropsWithoutRef<'button'> & {
        linkProps: LinkProps;
        imageProps: ImageProps;
    };

export const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
    linkProps,
    imageProps,
    className,
    ...props
}) => {
    return (
        <button
            {...props}
            className={cn(
                'flex items-center justify-center',
                'rounded-full',
                'transition-all duration-200 ease-in',
                'hover:scale-125',
                'md:hover:scale-150',
                className
            )}
        >
            <Link
                target='_blank'
                rel='noopener noreferrer'
                {...linkProps}
                className='relative h-12 w-12'
            >
                <Image fill {...imageProps} />
            </Link>
        </button>
    );
};

export default SocialMediaButton;
