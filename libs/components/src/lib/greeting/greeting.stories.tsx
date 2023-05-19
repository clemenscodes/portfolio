import { Greeting } from './greeting';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof Greeting> = {
    component: Greeting,
    title: 'Greeting',
};
export default Story;

export const Primary = {
    args: {},
};
