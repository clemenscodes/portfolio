import { useEffect, useState } from 'react';

export const useScroll = (autoScroll: boolean, isChecked: boolean): [boolean] => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setPrevScrollPos(currentScrollPos);
            if (autoScroll) {
                return setVisible(false);
            }
            if (isChecked) {
                return setVisible(true);
            }
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [autoScroll, isChecked, prevScrollPos]);

    return [visible];
};
