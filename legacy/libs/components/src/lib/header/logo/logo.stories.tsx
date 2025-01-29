import { Logo } from './logo';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof Logo> = {
    component: Logo,
    title: 'Logo',
};
export default Story;

export const Primary = {
    args: {},
};
