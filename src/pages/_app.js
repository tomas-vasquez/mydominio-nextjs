import React, { useEffect, useState } from "react";
import Head from "next/head";

//nprogress module
import "nprogress/nprogress.css";
import Router from "next/router";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

//firebase
import FirebaseContext from "../contexts/FirebaseContext";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "../firebase.config";

firebase.initializeApp(firebaseConfig);

//redux
import { Provider as ReduxProvider } from "react-redux";
import store from "../store";

// Create your forceUpdate hook
function useForceUpdate() {
  let [value, setState] = useState(1);
  return () => setState(value + 1);
}

function MyApp({ Component, pageProps }) {
  // Call your hook here
  const handleForceupdateMethod = useForceUpdate();

  useEffect(() => {
    //repaint the page when firebase has finished loading the user data
    firebase.auth().onAuthStateChanged(() => {
      handleForceupdateMethod();
    });
  }, []);

  return (
    <ReduxProvider store={store}>
      <FirebaseContext.Provider value={firebase}>
        <Head>
          <title>MyDominio</title>
        </Head>
        <Component {...pageProps} />
      </FirebaseContext.Provider>
    </ReduxProvider>
  );
}

export default MyApp;
