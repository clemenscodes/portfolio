import { rootMain } from '../../.storybook/main';
import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
    ...rootMain,
    core: {
        ...rootMain.core,
    },
    stories: [
        ...rootMain.stories,
        '../../libs/components/**/*.stories.@(js|jsx|ts|tsx|mdx)',
        '../../libs/pages/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    ],
    staticDirs: ['../web/public'],
    addons: [
        ...(rootMain.addons || []),
        '@nx/react/plugins/storybook',
        'storybook-addon-swc',
        'storybook-tailwind-dark-mode',
        {
            name: 'storybook-addon-next',
            options: {
                nextConfigPath: '../web/next.config.js',
            },
        },
    ],
    webpackFinal: async (config, { configType }) => {
        if (rootMain.webpackFinal) {
            config = await rootMain.webpackFinal(config, {
                configType,
                packageJson: undefined,
                configDir: '',
                presets: undefined,
            });
        }
        return config;
    },
    docs: {
        autodocs: true,
    },
};
module.exports = config;
