import { useIntersection } from '@hooks';
import { cn } from '@styles';
import { IProjects } from '@types';
import ProjectList from './project-list/project-list';

export type ProjectsProps = React.ComponentPropsWithoutRef<'section'> & {
    projects: IProjects;
};

export const Projects: React.FC<ProjectsProps> = ({ projects, ...props }) => {
    const [ref, visible] = useIntersection({ threshold: 0.1 });
    return (
        <section
            ref={ref}
            className={cn(
                'flex  flex-col',
                'my-24 w-full',
                'transform will-change-transform',
                'transition-all duration-1000',
                visible && 'opacity-100',
                visible && 'animate-in fade-in ease-out',
                visible && 'slide-in-from-bottom',
                visible || 'opacity-0',
                visible || 'animate-out fade-out',
                visible || 'slide-out-to-bottom'
            )}
            id='projects'
            {...props}
        >
            <h1
                className={cn(
                    'text-center text-3xl',
                    'md:text-left md:text-8xl'
                )}
            >
                {projects.title}
            </h1>
            <p
                className={cn(
                    'my-6',
                    'text-center text-xl',
                    'text-dimmed-muted',
                    'md:text-left md:text-3xl'
                )}
            >
                {projects.subTitle}
            </p>
            <ProjectList projects={projects.projects} />
        </section>
    );
};

export default Projects;
