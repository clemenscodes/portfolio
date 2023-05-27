import { i18nPortfolio } from '@config';
import { type Locale } from '@config';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const Home = dynamic(() => import('@pages').then((mod) => mod.Home));

export const Index: NextPage = () => {
    const { locale, locales } = useRouter();

    if (!locales.includes(locale as Locale)) {
        return <Home portfolio={i18nPortfolio.get('en')} />;
    }

    const portfolio = i18nPortfolio.get(locale as Locale);
    return <Home portfolio={portfolio} />;
};

export default Index;
