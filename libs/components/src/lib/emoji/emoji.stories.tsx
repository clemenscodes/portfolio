import { Emoji } from './emoji';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof Emoji> = {
    component: Emoji,
    title: 'Emoji',
};
export default Story;

export const Primary = {
    args: {},
};
