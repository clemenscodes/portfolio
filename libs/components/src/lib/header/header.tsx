import ModeToggle from '../mode-toggle/mode-toggle';
import { cn } from '@styles';

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({ ...props }) => {
    return (
        <div className={cn([])}>
            <ModeToggle />
        </div>
    );
};

export default Header;
