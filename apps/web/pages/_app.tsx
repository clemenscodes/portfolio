import '../global.css';
import { site } from '@config';
import { Analytics } from '@vercel/analytics/react';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { Roboto_Condensed } from 'next/font/google';
import Head from 'next/head';

const ThemeProvider = dynamic(() => import('next-themes').then((mod) => mod.ThemeProvider));

const robotoCondensed = Roboto_Condensed({
    weight: '300',
    variable: '--font-sans',
    subsets: ['latin'],
    preload: true,
    display: 'swap',
});

const App: React.FC<AppProps> = ({ Component, ...pageProps }) => {
    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=0.8' />
                <title>{site.title}</title>
            </Head>
            <ThemeProvider attribute='class' defaultTheme='dark' disableTransitionOnChange enableColorScheme>
                <div className={`${robotoCondensed.variable} font-sans`}>
                    <Component {...pageProps} />
                    <Analytics />
                </div>
            </ThemeProvider>
        </>
    );
};

export default App;
