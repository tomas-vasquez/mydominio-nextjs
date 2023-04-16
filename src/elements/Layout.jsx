import React, { Component } from "react";
import Footer from "../sections/Footer";

import Nav from "../sections/Nav";
import Head from "./Head";

function Layout({ children }) {
  return (
    <>
      <Head />

      <div class="Container-xxl bg-white p-0">
        <Nav />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
