import type { Meta } from '@storybook/react';
import { Contact } from './contact';

const Story: Meta<typeof Contact> = {
    component: Contact,
    title: 'Contact',
};
export default Story;

export const Primary = {
    args: {},
};
