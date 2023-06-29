import { SkillCategoryList } from './skill-category-list';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof SkillCategoryList> = {
    component: SkillCategoryList,
    title: 'SkillCategoryList',
};
export default Story;

export const Primary = {
    args: {},
};
