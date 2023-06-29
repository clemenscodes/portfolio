import type { Meta } from '@storybook/react';
import { Emoji } from './emoji';

const Story: Meta<typeof Emoji> = {
    component: Emoji,
    title: 'Emoji',
};
export default Story;

export const Primary = {
    args: {},
};
