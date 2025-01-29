import { ContactForm } from './contact-form';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof ContactForm> = {
    component: ContactForm,
    title: 'ContactForm',
};
export default Story;

export const Primary = {
    args: {},
};
