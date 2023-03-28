import { NextPage } from 'next';
import dynamic from 'next/dynamic';

const Home = dynamic(() => import('@pages').then((mod) => mod.Home));

export const Index: NextPage = () => {
    return <Home />;
};

export default Index;
