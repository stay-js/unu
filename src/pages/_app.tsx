import '../styles/style.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import NavBar from '../components/NavBar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="author" content="stay" />

        <meta property="og:locale" content="hu_HU" />
        <meta property="og:type" content="website" key="og_type" />
        <meta
          property="og:site_name"
          content="Úri népek uralma"
          key="site_name"
        />
        <meta
          name="keywords"
          content="Úri népek uralma, Kártyajáték, Very Pesti(s)ek"
        />
        <meta name="theme-color" content="#1e293b" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="stayy.xyz" />

        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Hungarian" />
        <meta name="rating" content="general" />
      </Head>

      <div>
        <NavBar />
        <Component {...pageProps} />
      </div>
    </>
  );
}
