import React, { Component } from "react";
import SingleItemTable from "../SingleItemTable";

import SuccessSection from "./SuccessSection";
import FailureSection from "./FailureSection";

export default class VerificationResults extends Component {
  verificationResults = this.props.verificationResults;

  render() {
    const { url } = this.props;
    var tableIndex = 1;

    return (
      <div
        id="search-section"
        className="container-xxl"
        style={{ paddingTop: "90px", marginBottom: "90px" }}
      >
        <div className="domain container px-lg-6">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title position-relative text-center mx-auto mb-4 pb-4 animated fadeInUp"
                data-wow-delay="0.1s"
                // style={{ maxWidth: "800px" }}
              >
                {this.verificationResults.availableToRegister ? (
                  <SuccessSection
                    url={url}
                    verificationResults={this.verificationResults}
                  />
                ) : (
                  <>
                    <h1 className="mb-3">
                      <i className="fas fa-times text-danger"></i> Upps!!!
                    </h1>
                    <h2 className="my-3">No puede registrar: {url}</h2>

                    <p className="mb-1">
                      El nombre de dominio <strong>ya fue registrado</strong>{" "}
                      con anterioridad, pruebe con otro nombre u otra extension
                      de dominio.
                    </p>
                  </>
                )}
              </div>
              <FailureSection url={url} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
