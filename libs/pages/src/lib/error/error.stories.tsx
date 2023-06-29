import { Error } from './error';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof Error> = {
    component: Error,
    title: 'Error',
};
export default Story;

export const Primary = {
    args: {},
};
