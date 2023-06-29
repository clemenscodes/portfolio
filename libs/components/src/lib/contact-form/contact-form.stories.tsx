import type { Meta } from '@storybook/react';
import { ContactForm } from './contact-form';

const Story: Meta<typeof ContactForm> = {
    component: ContactForm,
    title: 'ContactForm',
};
export default Story;

export const Primary = {
    args: {},
};
