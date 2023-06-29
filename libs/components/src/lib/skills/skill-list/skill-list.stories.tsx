import type { Meta } from '@storybook/react';
import { SkillList } from './skill-list';

const Story: Meta<typeof SkillList> = {
    component: SkillList,
    title: 'SkillList',
};
export default Story;

export const Primary = {
    args: {},
};
