import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
    core: { disableTelemetry: true },
    stories: [
        '../../libs/components/**/*.stories.@(js|jsx|ts|tsx|mdx)',
        '../../libs/pages/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    ],
    addons: ['@storybook/addon-essentials', 'storybook-tailwind-dark-mode'],
    staticDirs: ['../web/public'],
    framework: {
        name: '@storybook/nextjs',
        options: {
            nextConfigPath: '../web/next.config.js',
        },
    },
    docs: { autodocs: true },
    features: { storyStoreV7: true, buildStoriesJson: true },
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
