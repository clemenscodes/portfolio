import type { Meta } from '@storybook/react';
import { Project } from './project';

const Story: Meta<typeof Project> = {
    component: Project,
    title: 'Project',
};
export default Story;

export const Primary = {
    args: {},
};
