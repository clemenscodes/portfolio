import { Projects } from './projects';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof Projects> = {
    component: Projects,
    title: 'Projects',
};
export default Story;

export const Primary = {
    args: {},
};
