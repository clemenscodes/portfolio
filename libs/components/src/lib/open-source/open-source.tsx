import { cn } from '@styles';

/* eslint-disable-next-line */
export interface OpenSourceProps {}

export const OpenSource: React.FC<OpenSourceProps> = ({ ...props }) => {
    return (
        <div className={cn([])} id='opensource'>
            <h1>Welcome to OpenSource!</h1>
        </div>
    );
};

export default OpenSource;
