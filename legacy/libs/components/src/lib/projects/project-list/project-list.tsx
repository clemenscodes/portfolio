import Project from './project/project';
import { cn } from '@styles';
import { IProject } from '@types';

export type ProjectListProps = React.ComponentPropsWithoutRef<'ul'> & {
    projects: IProject[];
};

export const ProjectList: React.FC<ProjectListProps> = ({
    projects,
    ...props
}) => {
    return (
        <ul
            className={cn(
                'flex flex-col justify-between',
                'sm:flex-row sm:flex-wrap'
            )}
            {...props}
        >
            {projects.map((project, index) => (
                <Project project={project} key={index} />
            ))}
        </ul>
    );
};

export default ProjectList;
