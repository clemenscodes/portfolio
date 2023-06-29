import type { Meta } from '@storybook/react';
import { LanguageSelection } from './language-selection';

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
