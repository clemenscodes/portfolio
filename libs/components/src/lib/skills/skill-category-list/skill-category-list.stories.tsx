import type { Meta } from '@storybook/react';
import { SkillCategoryList } from './skill-category-list';

const Story: Meta<typeof SkillCategoryList> = {
    component: SkillCategoryList,
    title: 'SkillCategoryList',
};
export default Story;

export const Primary = {
    args: {},
};
