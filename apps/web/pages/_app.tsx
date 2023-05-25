import '../global.css';
import { site } from '@config';
import { Analytics } from '@vercel/analytics/react';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const ThemeProvider = dynamic(() => import('next-themes').then((mod) => mod.ThemeProvider));
const FontProvider = dynamic(() => import('@providers').then((mod) => mod.FontProvider));

const App: React.FC<AppProps> = ({ Component, ...pageProps }) => {
    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=0.8' />
                <title>{site.title}</title>
            </Head>
            <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
                <FontProvider>
                    <Component {...pageProps} />
                    <Analytics />
                </FontProvider>
            </ThemeProvider>
        </>
    );
};

export default App;
