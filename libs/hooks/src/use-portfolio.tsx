import { Locale, i18nPortfolio, portfolio } from '@config';
import { IPortfolio } from '@types';
import { useRouter } from 'next/router';

export const usePortfolio = (): IPortfolio => {
    const { locale, locales } = useRouter();

    if (!(locale && locales && locales.includes(locale as Locale))) {
        return portfolio;
    }

    const p = i18nPortfolio.get(locale as Locale);

    if (!p) {
        return portfolio;
    }

    return p;
};
