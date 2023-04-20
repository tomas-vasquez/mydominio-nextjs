import Link from "next/link";
import { useContext } from "react";
import FirebaseContext from "../contexts/FirebaseContext";
import AuthModal from "./auth/AuthModal";
import ExchangeRateSelector from "./shop/ExchangeRateSelector";
import ShoppinCar from "./shop/ShoppinCar";

export default function Nav() {
  const firebase = useContext(FirebaseContext);
  const user = firebase.auth().currentUser;

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

            <Link href="contact.html" className="nav-item nav-link">
              Contacto
            </Link>
          </div>
          <div className="d-flex py-2 px-4 ms-3">
            <ExchangeRateSelector />
            <ShoppinCar user={user} />
            <AuthModal user={user} />
          </div>
        </div>
      </nav>
    </div>
  );
}
