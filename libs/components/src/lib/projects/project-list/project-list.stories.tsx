import type { Meta } from '@storybook/react';
import { ProjectList } from './project-list';

const Story: Meta<typeof ProjectList> = {
    component: ProjectList,
    title: 'ProjectList',
};
export default Story;

export const Primary = {
    args: {},
};
