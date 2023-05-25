import { ProjectList } from './project-list';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof ProjectList> = {
    component: ProjectList,
    title: 'ProjectList',
};
export default Story;

export const Primary = {
    args: {},
};
