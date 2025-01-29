import { Email } from './email';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof Email> = {
    component: Email,
    title: 'Email',
};
export default Story;

export const Primary = {
    args: {},
};
