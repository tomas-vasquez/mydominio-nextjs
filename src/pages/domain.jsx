import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  checkAvailability,
  extensions,
  validateAndPurgeDomainName,
} from "../helpers/searchDomain";

import SearchingDomain from "../sections/domain/SearchingDomain";
import SearchDomain from "../sections/domain/SearchDomain";
import VerificationResults from "../sections/domain/VerificationResults";
import Nav from "../sections/Nav";

export default function Home() {
  const [currentDomainName, setCurrentDomainName] = useState("");
  const [currentDomainExtension, setCurrentDomainExtension] = useState(".com");
  const [targetDomainName, setTargetDomainName] = useState("");

  const [consulting, setConsulting] = useState(false);
  const [verificationResults, setVerificationResults] = useState(undefined);

  const router = useRouter();

  useEffect(() => {
    var { name } = router.query;
    var { extension } = router.query;
    if (name) {
      setCurrentDomainName(name);
      setCurrentDomainExtension(extension);
      setTargetDomainName(name + extension);

      if (!verificationResults) {
        checkAvailability(
          name + extension,
          setConsulting,
          setVerificationResults
        );
        setTimeout(() => {
          const element = document.getElementById("search-section");
          element.scrollIntoView({ behavior: "smooth" });
        }, 500);
      }
    }
  }, [router.query]);

  var onInputChangetHandler = (e) => {
    e.preventDefault();
    const domainName = e.target.value;
    var newDomainName = validateAndPurgeDomainName(domainName);
    setCurrentDomainName(newDomainName);
    setCurrentDomainExtension(currentDomainExtension);
  };

  var onSubmitHandler = (e) => {
    e.preventDefault();
    const extension = e.target[1].value;
    setCurrentDomainExtension(extension);
    setTargetDomainName(currentDomainName + extension);

    checkAvailability(
      currentDomainName + currentDomainExtension,
      setConsulting,
      setVerificationResults
    );
    setTimeout(() => {
      const element = document.getElementById("search-section");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  };

  return (
    <>
      <Nav />
      <div className="container-xxl pt-5 bg-primary hero-header mb-0">
        <div className="container mt-5 mb-4 py-5 px-lg-4">
          <div className="row g-5 pt-5">
            <div className="col-12 text-center text-lg-start">
              <h1 className="display-4 text-white animated slideInLeft">
                Registro de dominios
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center justify-content-lg-start animated slideInLeft">
                  <li className="breadcrumb-item">
                    <a className="text-white" href="#">
                      Inicio
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a className="text-white" href="#">
                      Dominios
                    </a>
                  </li>
                </ol>
              </nav>

              <form
                onSubmit={onSubmitHandler}
                className="form mt-5 animated slideInLeft"
              >
                <input
                  required
                  minLength={2}
                  onChange={onInputChangetHandler}
                  className="form-control shadow-lg bg-white border-0 w-80 py-3 ps-4 pe-5"
                  type="text"
                  value={currentDomainName}
                  placeholder="Enter your email"
                ></input>

                <div className="position-absolute top-0 end-0 d-flex">
                  <select
                    className="form-select py-2 px-3 mt-2 me-2 "
                    name="extension"
                    value={currentDomainExtension}
                    onChange={(e) => {
                      e.preventDefault();
                      setCurrentDomainExtension(e.target.value);
                    }}
                    style={{ minWidth: "85px" }}
                  >
                    {extensions.map((extension) => (
                      <option key={"k" + extension.text} value={extension.text}>
                        {extension.text}
                      </option>
                    ))}
                  </select>
                  <button
                    type="submit"
                    className="d-flex btn btn-primary py-2 mt-2 pe-0 me-2"
                  >
                    Registrar{"   "}{" "}
                    <i className="pe-2 pt-1 px-2 fa fa-arrow-right" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {consulting ? (
        <SearchingDomain domainName={targetDomainName} />
      ) : verificationResults ? (
        <VerificationResults
          domainName={targetDomainName}
          currentDomainExtension={currentDomainExtension}
          verificationResults={verificationResults}
        />
      ) : (
        <SearchDomain />
      )}
    </>
  );
}
