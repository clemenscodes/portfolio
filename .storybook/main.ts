import type { StorybookConfig } from '@storybook/nextjs';

export const rootMain: StorybookConfig = {
    framework: '@storybook/nextjs',
    core: {
        builder: '@storybook/builder-webpack5',
        disableTelemetry: true,
    },
    stories: [],
    addons: ['@storybook/addon-essentials', '@storybook/addon-links', '@storybook/addon-controls'],
    // webpackFinal: async (config, { configType }) => {
    //   // Make whatever fine-grained changes you need that should apply to all storybook configs

    //   // Return the altered config
    //   return config;
    // },
};

export const framework = {
    name: '@storybook/react-webpack5',
    options: {},
};
export const docs = {
    autodocs: true,
};
