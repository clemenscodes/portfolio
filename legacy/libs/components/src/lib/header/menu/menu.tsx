import { cn } from '@styles';

export type MenuProps = React.ComponentPropsWithoutRef<'input'> & {
    isChecked: boolean;
    handleChecked: () => void;
};

export const Menu: React.FC<MenuProps> = ({
    isChecked,
    handleChecked,
    ...props
}) => {
    return (
        <label
            htmlFor='menu'
            className={cn('max-h-16 px-2 py-8', 'cursor-pointer select-none')}
        >
            <input
                className={cn('hidden')}
                checked={isChecked}
                onChange={handleChecked}
                type='checkbox'
                id='menu'
                {...props}
            />
            <span
                className={cn(
                    'relative right-0 block',
                    'h-[2px] w-4',
                    'bg-black',
                    'dark:bg-white',
                    'md:hidden',
                    isChecked && 'bg-white',
                    isChecked && 'transition-all duration-200 ease-out ',
                    isChecked && 'dark:bg-dimmed-900',

                    'before:absolute before:top-1 before:block',
                    'before:h-[2px] before:w-4',
                    'before:bg-black dark:before:bg-white',
                    'before:transform before:transition-all',
                    'before:duration-200 before:ease-out',
                    isChecked && 'before:top-0 before:-rotate-45',

                    'after:absolute after:-top-1 after:block',
                    'after:h-[2px] after:w-4',
                    'after:bg-black dark:after:bg-white',
                    'after:transform after:transition-all',
                    'after:duration-200 after:ease-out',
                    isChecked && 'after:top-0 after:rotate-45'
                )}
            />
        </label>
    );
};

export default Menu;
