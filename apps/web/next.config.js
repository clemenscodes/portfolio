//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
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
