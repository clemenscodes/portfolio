import { usePortfolio } from '@hooks';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';

const Home = dynamic(() => import('@pages').then((mod) => mod.Home));

export const Index: NextPage = () => {
    return <Home portfolio={usePortfolio()} />;
};

export default Index;
