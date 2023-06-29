import { cn } from '@styles';
import { IProjectLink } from '@types';
import ProjectLink from './project-link/project-link';

export type ProjectLinkListProps = React.ComponentPropsWithoutRef<'ul'> & {
    links: IProjectLink[];
};

export const ProjectLinkList: React.FC<ProjectLinkListProps> = ({
    links,
    ...props
}) => {
    return (
        <ul className={cn('flex flex-wrap justify-evenly')} {...props}>
            {links.map((link, index) => (
                <ProjectLink link={link} key={index} />
            ))}
        </ul>
    );
};

export default ProjectLinkList;
