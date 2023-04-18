import React, { Component } from "react";

export default class SearchingDomain extends Component {
  render() {
    return (
      <div
        id="search-section"
        className="container-xxl domain"
        style={{ paddingTop: "90px", marginBottom: "90px" }}
      >
        <div className="container px-lg-6">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title position-relative text-center mx-auto mb-4 pb-4 wow fadeInUp"
                data-wow-delay="0.1s"
                style={{ maxWidth: "800px" }}
              >
                <h1 className="mb-3">
                  <i className="fas fa-spinner fa-spin "></i> Comprobando
                  disponibilidad de:
                </h1>
                <h2 className="my-3">"{this.props.domainName}"</h2>
                <p className="mb-1">
                  Somos proveedores de dominios web obtenga cualquier extencion
                  de dominio existente.
                </p>
              </div>

              <div className="row g-3 wow fadeInUp" data-wow-delay="0.5s">
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                  <h5 className="fw-bold text-primary mb-1">.com</h5>
                  <p className="mb-0">$9.99/year</p>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                  <h5 className="fw-bold text-primary mb-1">.net</h5>
                  <p className="mb-0">$9.99/year</p>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                  <h5 className="fw-bold text-primary mb-1">.org</h5>
                  <p className="mb-0">$9.99/year</p>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                  <h5 className="fw-bold text-primary mb-1">.us</h5>
                  <p className="mb-0">$9.99/year</p>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                  <h5 className="fw-bold text-primary mb-1">.eu</h5>
                  <p className="mb-0">$9.99/year</p>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                  <h5 className="fw-bold text-primary mb-1">.co.uk</h5>
                  <p className="mb-0">$9.99/year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
