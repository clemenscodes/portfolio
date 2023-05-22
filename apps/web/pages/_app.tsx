import '../global.css';
import { site } from '@config';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const ThemeProvider = dynamic(() => import('next-themes').then((mod) => mod.ThemeProvider));
const FontProvider = dynamic(() => import('@providers').then((mod) => mod.FontProvider));
const Layout = dynamic(() => import('@components').then((mod) => mod.Layout));

const App: React.FC<AppProps> = ({ Component, ...pageProps }) => {
    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=0.9' />
                <title>{site.title}</title>
            </Head>
            <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
                <FontProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </FontProvider>
            </ThemeProvider>
        </>
    );
};

export default App;
