import { useRouter } from "next/router";
import React from "react";

export default function SearchDomain() {
  const router = useRouter();

  const handleClick = (e, name) => {
    e.preventDefault();
    var name = e.target["domainName"].value;
    router.push("domain?name=" + name);
  };

  return (
    <div className="container-xxl domain mb-5" style={{ marginTop: "90px" }}>
      <div className="container px-lg-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div
              className="section-title position-relative text-center mx-auto mb-4 pb-4 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: "600px" }}
            >
              <h1 className="mb-3">Busca tu dominio</h1>
              <p className="mb-1">
                Vero justo sed sed vero clita amet. Et justo vero sea diam elitr
                amet ipsum eos ipsum clita duo sed. Sed vero sea diam erat vero
                elitr sit clita.
              </p>
            </div>
            {/* <div
              className="position-relative w-100 my-3 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <form onSubmit={handleClick}>
                <input
                  required
                  minLength={4}
                  name="domainName"
                  className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                  type="text"
                  value="google.com"
                  placeholder="Enter your domain name"
                />
                <input
                  content="hola"
                  type="submit"
                  className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2"
                />
              </form>
            </div> */}
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
