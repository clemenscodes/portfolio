import { site } from '@config';
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
