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
import firebaseConfig from "../firebaseConfig";

firebase.initializeApp(firebaseConfig);

// Create your forceUpdate hook
function useForceUpdate() {
  let [value, setState] = useState(true);
  return () => setState(!value);
}

function MyApp({ Component, pageProps }) {
  // Call your hook here
  const handleForceupdateMethod = useForceUpdate();

  useEffect(() => {
    //repaint the page when firebase has finished loading the user data
    firebase.auth().onAuthStateChanged(() => {
      setTimeout(() => {}, 1000);
      handleForceupdateMethod();
    });
  }, []);

  return (
    <FirebaseContext.Provider value={firebase}>
      <Head>
        <title>MyDominio</title>
      </Head>
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  );
}

export default MyApp;
