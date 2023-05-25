import { Skill } from './skill';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof Skill> = {
    component: Skill,
    title: 'Skill',
};
export default Story;

export const Primary = {
    args: {},
};
