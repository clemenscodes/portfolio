import { Footer, Greeting, Header, Projects, Skills } from '@components';
import { cn } from '@styles';
import { IPortfolio } from '@types';
import { NextPage } from 'next';

export type HomeProps = React.ComponentPropsWithoutRef<'div'> & {
    portfolio: IPortfolio;
};

export const Home: NextPage<HomeProps> = ({ portfolio, ...props }) => {
    const { sections, greeting, links, skills, projects, contact } = portfolio;
    return (
        <div className={cn('flex h-screen flex-col justify-between')} {...props}>
            <Header sections={sections} name={greeting.name} />
            <main className={cn('mx-6 mb-auto mt-24 md:mx-12 xl:mx-24')}>
                <Greeting greeting={greeting} links={links} />
                <Skills skills={skills} />
                <Projects projects={projects} />
            </main>
            <Footer contact={contact} links={links} />
        </div>
    );
};

export default Home;
