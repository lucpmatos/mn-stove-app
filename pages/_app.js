import React from "react";
import Head from "next/head";

// ----- Styles -----
//
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '../styles/_Base.scss';

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Aplicação do Fogão</title>
        <meta name="description" content="Mentes Notáveis Stove App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}
