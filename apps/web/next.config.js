//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const path = require('path');
const withPWA = require('next-pwa')({
    dest: 'public',
});

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
    reactStrictMode: true,
    optimizeFonts: true,
    swcMinify: true,
    nx: {
        svgr: true,
    },
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'de'],
    },

    experimental: {
        outputFileTracingRoot: path.join(__dirname, '../../'),
        outputFileTracingExcludes: {
            '*': [
                'node_modules/canvas/build',
                'node_modules/@swc/core-linux-x64-gnu',
                'node_modules/@swc/core-linux-x64-musl',
                'node_modules/@esbuild/linux-x64',
            ],
        },
    },
    webpack(config) {
        config.module.rules.push({
            test: /index\.(js|mjs|jsx|ts|tsx)$/,
            sideEffects: false,
        });
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
};

const plugins = [
    // Add more Next.js plugins to this list if needed.
    withNx,
    withPWA,
];

module.exports = composePlugins(...plugins)(nextConfig);
