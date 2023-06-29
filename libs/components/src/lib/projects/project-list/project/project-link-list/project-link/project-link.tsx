import { cn } from '@styles';
import { IProjectLink } from '@types';
import Button from '../../../../../button/button';

export type ProjectLinkProps = React.ComponentPropsWithoutRef<'li'> & {
    link: IProjectLink;
};

export const ProjectLink: React.FC<ProjectLinkProps> = ({ link, ...props }) => {
    return (
        <li {...props}>
            <Button
                newTab={true}
                className={cn('text-md mx-4 my-6 rounded md:text-2xl')}
                href={link.url.href}
            >
                {link.name}
            </Button>
        </li>
    );
};

export default ProjectLink;
