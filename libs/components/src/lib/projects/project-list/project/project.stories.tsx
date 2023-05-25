import { Project } from './project';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof Project> = {
    component: Project,
    title: 'Project',
};
export default Story;

export const Primary = {
    args: {},
};
