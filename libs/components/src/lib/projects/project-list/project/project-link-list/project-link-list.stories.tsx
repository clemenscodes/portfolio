import type { Meta } from '@storybook/react';
import { ProjectLinkList } from './project-link-list';

const Story: Meta<typeof ProjectLinkList> = {
    component: ProjectLinkList,
    title: 'ProjectLinkList',
};
export default Story;

export const Primary = {
    args: {},
};
