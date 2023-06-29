import type { Meta } from '@storybook/react';
import { Email } from './email';

const Story: Meta<typeof Email> = {
    component: Email,
    title: 'Email',
};
export default Story;

export const Primary = {
    args: {},
};
