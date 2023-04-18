import React, { Component } from "react";

export default class Home extends Component {

  componentDidMount() {
    if(){
     
    }
  }

  render() {
    return (
      <>
        <div className="container-xxl py-5 bg-primary hero-header mb-5">
          <div className="container my-5 py-5 px-lg-5">
            <div className="row g-5 pt-5">
              <div className="col-12 text-center text-lg-start">
                <h1 className="display-4 text-white animated slideInLeft">
                  Domain Registration
                </h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center justify-content-lg-start animated slideInLeft">
                    <li className="breadcrumb-item">
                      <a className="text-white" href="#">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a className="text-white" href="#">
                        Pages
                      </a>
                    </li>
                    <li
                      className="breadcrumb-item text-white active"
                      aria-current="page"
                    >
                      Domain
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-xxl domain"
          style={{ marginTop: "90px", marginBottom: "90px" }}
        >
          <div className="container px-lg-5">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div
                  className="section-title position-relative text-center mx-auto mb-4 pb-4 wow fadeInUp"
                  dataWowDelay="0.1s"
                  style={{ maxWidth: "600px" }}
                >
                  <h1 className="mb-3">Search Your Domain</h1>
                  <p className="mb-1">
                    Vero justo sed sed vero clita amet. Et justo vero sea diam
                    elitr amet ipsum eos ipsum clita duo sed. Sed vero sea diam
                    erat vero elitr sit clita.
                  </p>
                </div>
                <div
                  className="position-relative w-100 my-3 wow fadeInUp"
                  dataWowDelay="0.3s"
                >
                  <input
                    className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Enter your domain name"
                  />
                  <button
                    type="button"
                    className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2"
                  >
                    Search
                  </button>
                </div>
                <div className="row g-3 wow fadeInUp" dataWowDelay="0.5s">
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
      </>
    );
  }
}
