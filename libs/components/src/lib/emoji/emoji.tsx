import { cn } from '@styles';

export type EmojiProps = React.ComponentPropsWithoutRef<'span'> & {
    emoji: string;
    label: string;
};

export const Emoji: React.FC<EmojiProps> = ({
    emoji,
    label,
    className,
    ...props
}) => {
    const hidden = label ? 'false' : 'true';
    return (
        <span
            {...props}
            role='img'
            aria-label={label}
            aria-hidden={hidden}
            className={cn([className])}
        >
            {emoji}
        </span>
    );
};

export default Emoji;
