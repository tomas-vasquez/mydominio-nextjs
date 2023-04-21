import React, { Component } from "react";

import SuccessSection from "./SuccessSection";
import OtherAvailableExtensionsSection from "./OtherAvailableExtensionsSection";

export default class VerificationResults extends Component {
  render() {
    const { url, verificationResults } = this.props;
    var tableIndex = 1;

    return (
      <div
        id="search-section"
        className=""
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
                <SuccessSection
                  url={url}
                  verificationResults={verificationResults}
                />
              </div>
              <OtherAvailableExtensionsSection url={url} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
