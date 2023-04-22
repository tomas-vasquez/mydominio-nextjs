import React, { useState } from "react";
import Head from "next/head";

import { SnackbarProvider } from "notistack";

//nprogress module
import "nprogress/nprogress.css";
import Router from "next/router";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

//firebase
import FirebaseContext from "../contexts/FirebaseContext";
import myFirebase from "../myFirebase";

//redux
import { Provider as ReduxProvider } from "react-redux";
import store from "../store";

// Create your forceUpdate hook
function useForceUpdate() {
  let [value, setState] = useState(1);
  return () => setState(value + 1);
}

function MyApp({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <FirebaseContext.Provider value={myFirebase}>
        <SnackbarProvider>
          <Head>
            <title>MyDominio</title>
          </Head>
          <Component {...pageProps} />
        </SnackbarProvider>
      </FirebaseContext.Provider>
    </ReduxProvider>
  );
}

export default MyApp;
