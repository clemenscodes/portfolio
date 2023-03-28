import { Home } from './home';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof Home> = {
    component: Home,
    title: 'Home',
};
export default Story;

export const Primary = {
    args: {},
};
