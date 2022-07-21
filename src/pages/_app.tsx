import '../styles/globals.css';
import type { AppType } from 'next/dist/shared/lib/utils';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { MantineProvider } from '@mantine/core';
import Nav from '../components/Nav';

const App: AppType = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />

      <meta name="author" content="stay" />

      <meta property="og:locale" content="hu_HU" />
      <meta property="og:type" content="website" key="og_type" />
      <meta property="og:site_name" content="Úri népek uralma" key="site_name" />
      <meta name="keywords" content="Úri népek uralma, Kártyajáték, Very Pesti(s)ek" />
      <meta name="theme-color" content="#1e293b" />

      <meta name="url" content={`https://unu.znagy.hu${useRouter().pathname}`} />
      <meta property="og:url" content={`https://unu.znagy.hu${useRouter().pathname}`} />
      <meta property="twitter:url" content={`https://unu.znagy.hu${useRouter().pathname}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="znagy.hu" />

      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Hungarian" />
      <meta name="rating" content="general" />
    </Head>

    <MantineProvider theme={{ primaryColor: 'green', fontFamily: 'Roboto' }}>
      <Nav />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </MantineProvider>
  </>
);

export default App;
