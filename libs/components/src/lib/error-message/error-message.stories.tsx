import { ErrorMessage } from './error-message';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof ErrorMessage> = {
    component: ErrorMessage,
    title: 'ErrorMessage',
};
export default Story;

export const Primary = {
    args: {},
};
