import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { checkAvailability } from "../../helpers/searchDomain";

import Nav from "../../sections/Nav";
import { connect } from "react-redux";
import Hero from "./Hero";
import CheckingUrl from "./CheckingUrl";
import VerificationResults from "./VerificationResults";
import SearchDomain from "./SearchDomain";

function Home(props) {
  const [targetUrl, setTargetUrl] = useState("");
  const [verificationResults, setVerificationResults] = useState(undefined);

  const router = useRouter();
  const { url } = router.query;

  useEffect(() => {
    if (url) {
      setTargetUrl(url);
      //we check availability of the url
      if (!verificationResults) {
        checkAvailability(url, (results) => {
          setVerificationResults(results);
          const element = document.getElementById("search-section");
          element.scrollIntoView({ behavior: "smooth" });
        });
      }
    }
  }, [url]);

  var onSubmitHandler = (e) => {
    e.preventDefault();
    const extensionName = e.target[0].value;
    const domainName = e.target[1].value;

    setTargetUrl(extensionName + domainName);

    //clear data
    setVerificationResults(null);

    //we check availability of the url
    checkAvailability(url, (results) => {
      setVerificationResults(results);
      const element = document.getElementById("search-section");
      element.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <>
      <Nav />

      <Hero onSubmitHandler={onSubmitHandler} />

      {url || targetUrl ? (
        verificationResults ? (
          <VerificationResults
            url={targetUrl}
            verificationResults={verificationResults}
          />
        ) : (
          <CheckingUrl url={targetUrl} />
        )
      ) : (
        <SearchDomain />
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    extensions: state.settings.extensions,
  };
};

export default connect(mapStateToProps)(Home);
