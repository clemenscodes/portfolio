const siteUrl = process.env.SITE_URL || 'https://clemenshorn.com';

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    sourceDir: 'dist/apps/web/.next',
    outDir: 'dist/apps/web/public',
};
