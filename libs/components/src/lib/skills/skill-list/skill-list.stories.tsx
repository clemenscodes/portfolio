import { SkillList } from './skill-list';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof SkillList> = {
    component: SkillList,
    title: 'SkillList',
};
export default Story;

export const Primary = {
    args: {},
};
