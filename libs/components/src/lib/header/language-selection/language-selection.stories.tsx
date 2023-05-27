import { LanguageSelection } from './language-selection';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof LanguageSelection> = {
    component: LanguageSelection,
    title: 'LanguageSelection',
    parameters: {
        nextjs: {
            appDirectory: false,
            router: {
                basePath: '/',
            },
        },
    },
};
export default Story;

export const Primary = {
    args: {},
};
