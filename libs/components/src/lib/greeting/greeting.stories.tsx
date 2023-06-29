import type { Meta } from '@storybook/react';
import { Greeting } from './greeting';

const Story: Meta<typeof Greeting> = {
    component: Greeting,
    title: 'Greeting',
};
export default Story;

export const Primary = {
    args: {},
};
