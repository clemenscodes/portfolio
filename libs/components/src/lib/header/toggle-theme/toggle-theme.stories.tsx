import { ToggleTheme } from './toggle-theme';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof ToggleTheme> = {
    component: ToggleTheme,
    title: 'ToggleTheme',
};
export default Story;

export const Primary = {
    args: {},
};
