import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div
        className="container-fluid bg-primary text-white footer mt-5 pt-5animatedfadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5 px-lg-5">
          <div className="row gy-5 gx-4 pt-5">
            <div className="col-12">
              <h5 className="fw-bold text-white mb-4">
                Subscribe Our Newsletter
              </h5>
              <div className="position-relative" style={{ maxWidth: "400px" }}>
                {/* <input
                  className="form-control bg-white border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Enter your email"
                ></input> */}
                <button
                  type="button"
                  className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2"
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="row gy-5 g-4">
                <div className="col-md-6">
                  <h5 className="fw-bold text-white mb-4">About Us</h5>
                  <a className="btn btn-link" href="">
                    About Us
                  </a>
                  <a className="btn btn-link" href="">
                    Contact Us
                  </a>
                  <a className="btn btn-link" href="">
                    Privacy Policy
                  </a>
                  <a className="btn btn-link" href="">
                    Terms & Condition
                  </a>
                  <a className="btn btn-link" href="">
                    Support
                  </a>
                </div>
                <div className="col-md-6">
                  <h5 className="fw-bold text-white mb-4">Our Services</h5>
                  <a className="btn btn-link" href="">
                    Domain Register
                  </a>
                  <a className="btn btn-link" href="">
                    Shared Hosting
                  </a>
                  <a className="btn btn-link" href="">
                    VPS Hosting
                  </a>
                  <a className="btn btn-link" href="">
                    Dedicated Hosting
                  </a>
                  <a className="btn btn-link" href="">
                    Reseller Hosting
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h5 className="fw-bold text-white mb-4">Get In Touch</h5>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i>123 Street, New
                York, USA
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>+012 345 67890
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3"></i>info@example.com
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-lg-n5">
              {/* <div className="bg-light rounded" style={{ padding: "30px" }}>
                <input
                  type="text"
                  className="form-control border-0 py-2 mb-2"
                  placeholder="Name"
                ></input>
                <input
                  type="email"
                  className="form-control border-0 py-2 mb-2"
                  placeholder="Email"
                ></input>
                <textarea
                  className="form-control border-0 mb-2"
                  rows="2"
                  placeholder="Message"
                ></textarea>
                <button className="btn btn-primary w-100 py-2">
                  Send Message
                </button>
              </div> */}
            </div>
          </div>
        </div>
        <div className="container px-lg-5">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a className="border-bottom" href="#">
                  Your Site Name
                </a>
                , All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="">Home</a>
                  <a href="">Cookies</a>
                  <a href="">Help</a>
                  <a href="">FQAs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
