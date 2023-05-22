import { cn } from '@styles';

/* eslint-disable-next-line */
export interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = ({ ...props }) => {
    return (
        <section className={cn([])} id='projects'>
            <h1>Welcome to Projects!</h1>
        </section>
    );
};

export default Projects;
