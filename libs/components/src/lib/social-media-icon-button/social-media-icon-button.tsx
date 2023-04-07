import { cn } from '@styles';
import { HTML } from '@types';
import Image, { ImageProps } from 'next/image';
import Link, { LinkProps } from 'next/link';

export type SocialMediaIconButtonProps = HTML<'button'> & {
    linkProps: LinkProps;
    imageProps: ImageProps;
};

export const SocialMediaIconButton: React.FC<SocialMediaIconButtonProps> = ({
    linkProps,
    imageProps,
    className,
    ...props
}) => {
    return (
        <button
            {...props}
            className={cn(
                'flex h-12 w-12 items-center justify-center rounded-full transition-all duration-200 ease-in sm:hover:scale-125 md:hover:scale-150',
                className
            )}
        >
            <Link target='_blank' rel='noopener noreferrer' {...linkProps}>
                <Image {...imageProps} />
            </Link>
        </button>
    );
};

export default SocialMediaIconButton;
