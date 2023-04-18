import React from "react";
import Footer from "../sections/Footer";

import Nav from "../sections/Nav";

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />

          {/* <!-- Favicon --> */}
          <link href="favicon.ico" rel="icon" />

          {/* <!-- Google Web Fonts --> */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          {/* <!-- Icon Font Stylesheet --> */}
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
            rel="stylesheet"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
            rel="stylesheet"
          />

          {/* <!-- Libraries Stylesheet --> */}
          <link href="lib/animate/animate.min.css" rel="stylesheet" />
          <link
            href="lib/owlcarousel/assets/owl.carousel.min.css"
            rel="stylesheet"
          />

          {/* <!-- Customized Bootstrap Stylesheet --> */}
          <link href="css/bootstrap.min.css" rel="stylesheet" />

          {/* <!-- Template Stylesheet --> */}
          <link href="css/style.css" rel="stylesheet" />
        </Head>
        <body>
          <div className="bg-white p-0">
            <Nav />
            <Main />
            <Footer />
          </div>
          <NextScript />

          <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
          <script src="lib/wow/wow.min.js"></script>
          <script src="lib/easing/easing.min.js"></script>
          <script src="lib/waypoints/waypoints.min.js"></script>
          <script src="lib/counterup/counterup.min.js"></script>
          <script src="lib/owlcarousel/owl.carousel.min.js"></script>

          <script src="js/main.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
