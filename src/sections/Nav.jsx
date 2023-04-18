import Link from "next/link";

export default function Nav() {
  return (
    <div className="container-xxl position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <a href="" className="navbar-brand p-0">
          <h1 className="m-0">
            <i className="fa fa-server me-3"></i>MyDominio
          </h1>
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
            <Link href="/" className="nav-item nav-link active">
              Hosting
            </Link>
            <Link href="domain" className="nav-item nav-link">
              Dominio
            </Link>
            <Link href="domain.html" className="nav-item nav-link">
              Certificados SSL
            </Link>
            <Link href="hosting.html" className="nav-item nav-link">
              Servidores VPS
            </Link>
            <Link href="contact.html" className="nav-item nav-link">
              Servicios
            </Link>
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
            <Link href="contact.html" className="nav-item nav-link">
              Contacto
            </Link>
          </div>

          <a href="" className="btn btn-secondary py-2 px-4 ms-3">
            Register
          </a>
        </div>
      </nav>
    </div>
  );
}
