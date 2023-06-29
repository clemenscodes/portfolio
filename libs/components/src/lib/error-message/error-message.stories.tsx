import type { Meta } from '@storybook/react';
import { ErrorMessage } from './error-message';

const Story: Meta<typeof ErrorMessage> = {
    component: ErrorMessage,
    title: 'ErrorMessage',
};
export default Story;

export const Primary = {
    args: {},
};
