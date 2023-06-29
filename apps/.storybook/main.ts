import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

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
            nextConfigPath: path.join(__dirname, '../web/next.config.js'),
        },
    },
    docs: { autodocs: true },
    features: { storyStoreV7: true, buildStoriesJson: true },
    webpackFinal: async (config, { configType }) => {
        // apply any global webpack configs that might have been specified in .storybook/main.js
        // add your own webpack tweaks if needed
        return config;
    },
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
