import { MutableRefObject, useEffect, useRef, useState } from 'react';

export const useIntersection = <K extends HTMLElement = HTMLElement>(
    options: IntersectionObserverInit = { threshold: 0.25 }
): [MutableRefObject<K | null>, boolean] => {
    const [visible, setVisible] = useState(false);
    const ref = useRef<K | null>(null);

    useEffect(() => {
        const current = ref.current;
        if (!current) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);
            }
        }, options);
        observer.observe(current);
        return () => observer.unobserve(current);
    }, [options, ref]);

    return [ref, visible];
};
