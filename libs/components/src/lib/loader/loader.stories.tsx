import { Loader } from './loader';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof Loader> = {
    component: Loader,
    title: 'Loader',
};
export default Story;

export const Primary = {
    args: {},
};
