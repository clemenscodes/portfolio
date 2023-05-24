import ProjectLinkList from '../../project-link-list/project-link-list';
import { cn } from '@styles';
import { IProject } from '@types';
import Image from 'next/image';

export type ProjectProps = React.ComponentPropsWithoutRef<'li'> & {
    project: IProject;
};

export const Project: React.FC<ProjectProps> = ({ project, ...props }) => {
    return (
        <li
            {...props}
            className={cn(
                'flex flex-col items-center',
                'my-4 w-full px-8',
                'rounded-lg',
                'shadow-full',
                'transition-all duration-300',
                'hover:shadow-full-xl',
                'xl:w-[49%]'
            )}
        >
            <div
                className={cn(
                    'relative my-8 inline-block h-48 w-48',
                    'md:h-72 md:w-72'
                )}
            >
                <Image
                    src={project.imageSrc}
                    alt={`${project.name} image`}
                    fill
                    sizes='33vw'
                    quality={100}
                    className={cn('h-full w-full rounded object-contain')}
                />
            </div>
            <h2 className={cn('text-center text-2xl', 'md:text-3xl')}>
                {project.name}
            </h2>
            <p
                className={cn(
                    'mx-8 mt-4',
                    'text-center text-lg',
                    'text-dimmed-muted',
                    'md:text-2xl'
                )}
            >
                {project.description}
            </p>
            <ProjectLinkList links={project.links} />
        </li>
    );
};

export default Project;
