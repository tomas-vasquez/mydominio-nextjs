import { useEffect, useState } from "react";
import { connect } from "react-redux";

import Link from "next/link";
import AuthModal from "./auth/AuthModal";
import ExchangeRateSelector from "./shop/ExchangeRateSelector";
import ShoppinCar from "./shop/ShoppinCar";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

function MyNav(props) {
  const [sticky, setSticky] = useState(false);
  const { user } = props;

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  useEffect(() => {
    if (window)
      window.addEventListener("scroll", (e) => {
        if (window.pageYOffset > 100) setSticky(true);
        else setSticky(false);
      });
  }, []);

  return (
    <div className="container-xxl ">
      <Navbar
        light
        expand="lg"
        className={[
          "px-0 py-3 py-lg-0  px-lg-5 py-0 ",
          sticky ? " sticky-top shadow" : "",
        ]}
      >
        <NavbarBrand href="/" color="primary" className="me-auto ">
          <h1 className="m-0 h2">
            <i className="fa fa-server me-3"></i>MyDominio
          </h1>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="mx-auto py-2 py-lg-0">
            <NavItem>
              <Link href="domain" className="nav-item nav-link">
                Dominio
              </Link>
            </NavItem>
            <NavItem>
              <Link href="domain.html" className="nav-item nav-link">
                Certificados SSL
              </Link>
            </NavItem>
            <NavItem>
              <Link href="contact.html" className="nav-item nav-link">
                Servicios
              </Link>
            </NavItem>
            <NavItem>
              <Link href="contact.html" className="nav-item nav-link">
                Contacto
              </Link>
            </NavItem>
          </Nav>
          <div className="d-flex ms-0 mt-1 mt-lg-0">
            <ExchangeRateSelector />
            <ShoppinCar user={user} />
            <AuthModal user={user} />
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.settings.user,
  };
};

export default connect(mapStateToProps)(MyNav);
