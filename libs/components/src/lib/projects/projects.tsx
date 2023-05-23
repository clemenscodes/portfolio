import Button from '../button/button';
import { projectsSection } from '@config';
import { cn } from '@styles';
import { IProjects } from '@types';
import Image from 'next/image';

export type ProjectsProps = React.ComponentPropsWithoutRef<'section'> & {
    projectsProps?: IProjects;
};

export const Projects: React.FC<ProjectsProps> = ({ projectsProps = projectsSection, ...props }) => {
    return (
        <section className={cn(['my-24 flex w-full flex-col'])} id='projects' {...props}>
            <h1 className={cn('text-center text-3xl md:text-left md:text-8xl')}>{projectsProps.title}</h1>
            <p className={cn('my-6 text-center text-xl text-dimmed-muted md:text-left md:text-3xl')}>
                {projectsProps.subTitle}
            </p>
            <ul>
                {projectsProps.projects.map((project, index) => (
                    <li
                        key={index}
                        className={cn(
                            'relative flex flex-col items-center rounded-lg px-8 shadow-full transition-all duration-300 hover:shadow-full-xl'
                        )}
                    >
                        <Image
                            src={project.imageSrc}
                            alt={`${project.name} image`}
                            width={400}
                            height={400}
                            className={cn('my-8 max-w-full rounded object-cover')}
                        />
                        <h2 className={cn('text-center text-2xl md:text-3xl')}>{project.name}</h2>
                        <p className={cn('mx-8 mt-4 text-center text-lg text-dimmed-muted md:text-2xl')}>
                            {project.description}
                        </p>
                        {project.links.map((link, index) => (
                            <Button
                                newTab={true}
                                className={cn('text-md my-12 rounded md:text-2xl')}
                                href={link.url.href}
                                key={index}
                            >
                                {link.name}
                            </Button>
                        ))}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;
