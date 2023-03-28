import { Header } from './header';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof Header> = {
    component: Header,
    title: 'Header',
};
export default Story;

export const Primary = {
    args: {},
};
