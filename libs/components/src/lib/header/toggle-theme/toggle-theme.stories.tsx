import type { Meta } from '@storybook/react';
import { ToggleTheme } from './toggle-theme';

const Story: Meta<typeof ToggleTheme> = {
    component: ToggleTheme,
    title: 'ToggleTheme',
};
export default Story;

export const Primary = {
    args: {},
};
