import { cn } from '@styles';

/* eslint-disable-next-line */
export interface LogoProps {}

export const Logo: React.FC<LogoProps> = ({ ...props }) => {
    return (
        <div className={cn([])}>
            <h1>Welcome to Logo!</h1>
        </div>
    );
};

export default Logo;
