export default function Nav() {
  return (
    <div className="container-xxl position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <a href="" className="navbar-brand p-0">
          <h1 className="m-0">
            <i className="fa fa-server me-3"></i>MyDominio
          </h1>
          {/* <!-- <img src="img/logo.png" alt="Logo"> --> */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <a href="index.html" className="nav-item nav-link active">
              Hosting
            </a>
            <a href="about.html" className="nav-item nav-link">
              Dominio
            </a>
            <a href="domain.html" className="nav-item nav-link">
              Certificados SSL
            </a>
            <a href="hosting.html" className="nav-item nav-link">
              Servidores VPS
            </a>
            <a href="contact.html" className="nav-item nav-link">
              Servicios
            </a>
            {/* <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu m-0">
                <a href="team.html" className="dropdown-item">
                  Our Team
                </a>
                <a href="testimonial.html" className="dropdown-item">
                  Testimonial
                </a>
                <a href="comparison.html" className="dropdown-item">
                  Comparison
                </a>
              </div>
            </div> */}
            <a href="contact.html" className="nav-item nav-link">
              Contacto
            </a>
          </div>
          <butaton
            type="button"
            className="btn text-secondary ms-3"
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
          >
            <i className="fa fa-search"></i>
          </butaton>
          <a href="" className="btn btn-secondary py-2 px-4 ms-3">
            Register
          </a>
        </div>
      </nav>
    </div>
  );
}
