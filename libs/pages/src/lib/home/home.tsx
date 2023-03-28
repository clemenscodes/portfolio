import { Loader } from '@components';
import { cn } from '@styles';
import { NextPage } from 'next';

/* eslint-disable-next-line */
export interface HomeProps {}

export const Home: NextPage<HomeProps> = ({ ...props }) => {
    return (
        <div className={cn(['flex flex-col items-center justify-center'])}>
            <h1>Welcome to Home!</h1>
            <Loader />
        </div>
    );
};

export default Home;
