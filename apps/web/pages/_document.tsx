import { contact, site } from '@config';
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    render() {
        return (
            <Html lang='en' translate='no'>
                <Head>
                    <meta name='google' content='notranslate' />
                    <meta charSet='UTF-8' />
                    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                    <meta name='keywords' content={site.keywords} />
                    <meta name='description' content={site.description} />
                    <meta name='application-name' content={site.title} />
                    <meta name='apple-mobile-web-app-title' content={site.title} />
                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                    <meta name='format-detection' content='telephone=yes' />
                    <meta name='mobile-web-app-capable' content='yes' />
                    <meta name='msapplication-config' content='/browserconfig.xml' />
                    <meta name='msapplication-TileColor' content='#603cba' />
                    <meta name='msapplication-tap-highlight' content='no' />
                    <meta name='theme-color' content='#6c63ff' />
                    <meta name='twitter:card' content={site.summary} />
                    <meta name='twitter:url' content={site.url.href} />
                    <meta name='twitter:title' content={site.title} />
                    <meta name='twitter:description' content={site.description} />
                    <meta name='twitter:image' content={`${site.url.href}android-chrome-192x192.png`} />
                    <meta name='twitter:creator' content={`@${contact.twitter}`} />
                    <meta property='og:type' content='website' />
                    <meta property='og:title' content={site.title} />
                    <meta property='og:description' content={site.description} />
                    <meta property='og:site_name' content={site.title} />
                    <meta property='og:url' content={site.url.href} />
                    <meta property='og:image' content={`${site.url.href}apple-touch-icon.png`} />
                    <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
                    <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
                    <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
                    <link rel='manifest' href='/manifest.json' />
                    <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
                    <link rel='shortcut icon' href='/favicon.ico' />
                </Head>
                <body className='scroll-smooth bg-white font-sans antialiased dark:bg-dimmed-900 dark:text-dimmed-font'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
