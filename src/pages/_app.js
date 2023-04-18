import React from "react";
import Head from "next/head";

//nprogress module
import Router from "next/router";
import NProgress from "nprogress";
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

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
