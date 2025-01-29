import { SocialMedia } from './social-media';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof SocialMedia> = {
    component: SocialMedia,
    title: 'SocialMedia',
};
export default Story;

export const Primary = {
    args: {},
};
