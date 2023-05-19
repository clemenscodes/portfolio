import { Greeting, Skills, Education, Projects, Contact, OpenSource } from '@components';
import { cn } from '@styles';
import { type HTML } from '@types';
import { NextPage } from 'next';

export type HomeProps = HTML<'div'>;

export const Home: NextPage<HomeProps> = ({ ...props }) => {
    return (
        <div {...props} className={cn(['flex flex-col items-center justify-center'])}>
            <Greeting />
            <Skills />
            <Education />
            <OpenSource />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;
