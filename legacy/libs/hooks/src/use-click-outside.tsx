import { Dispatch, RefObject, SetStateAction, useEffect, useState } from 'react';

export const useClickOutside = <T extends HTMLElement>(
    ref: RefObject<T>
): [boolean, Dispatch<SetStateAction<boolean>>] => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsChecked(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => document.removeEventListener('click', handleClickOutside);
    }, [ref]);

    return [isChecked, setIsChecked];
};
