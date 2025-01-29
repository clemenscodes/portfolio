import { SkillCategory } from './skill-category';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof SkillCategory> = {
    component: SkillCategory,
    title: 'SkillCategory',
};
export default Story;

export const Primary = {
    args: {},
};
