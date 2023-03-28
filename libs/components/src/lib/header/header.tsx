import { cn } from '@styles';

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({ ...props }) => {
    return (
        <div className={cn([])}>
            <h1>Welcome to Header!</h1>
        </div>
    );
};

export default Header;
