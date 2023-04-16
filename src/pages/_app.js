import "../styles/styles.css";
import React from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MyDominio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
