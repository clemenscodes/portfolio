import { cn } from '@styles';

export type ProjectsProps = React.ComponentPropsWithoutRef<'section'>;

export const Projects: React.FC<ProjectsProps> = ({ ...props }) => {
    return (
        <section className={cn([])} id='projects' {...props}>
            <h1>Welcome to Projects!</h1>
        </section>
    );
};

export default Projects;
