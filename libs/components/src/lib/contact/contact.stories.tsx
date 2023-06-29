import { Contact } from './contact';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof Contact> = {
    component: Contact,
    title: 'Contact',
};
export default Story;

export const Primary = {
    args: {},
};
