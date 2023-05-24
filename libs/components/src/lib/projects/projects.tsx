import ProjectList from './project-list/project-list';
import { projectsSection } from '@config';
import { cn } from '@styles';
import { IProjects } from '@types';

export type ProjectsProps = React.ComponentPropsWithoutRef<'section'> & {
    projectsProps?: IProjects;
};

export const Projects: React.FC<ProjectsProps> = ({
    projectsProps = projectsSection,
    ...props
}) => {
    return (
        <section
            className={cn(['my-24 flex w-full flex-col'])}
            id='projects'
            {...props}
        >
            <h1
                className={cn(
                    'text-center text-3xl',
                    'md:text-left md:text-8xl'
                )}
            >
                {projectsProps.title}
            </h1>
            <p
                className={cn(
                    'my-6',
                    'text-center text-xl',
                    'text-dimmed-muted',
                    'md:text-left md:text-3xl'
                )}
            >
                {projectsProps.subTitle}
            </p>
            <ProjectList projects={projectsProps.projects} />
        </section>
    );
};

export default Projects;
