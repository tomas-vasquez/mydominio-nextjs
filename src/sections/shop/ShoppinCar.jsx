import React, { useState } from "react";
import { Button, Modal } from "reactstrap";

import { connect } from "react-redux";

// Configure FirebaseUI.

function ShoppinCar(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const { user, products } = props;

  return user ? (
    <div className="pe-2">
      <Button color="success" className="btn " onClick={toggle}>
        <i className="fa fa-shopping-cart" />
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <div className="card">
          <div className="card-header">
            <h5 className="my-3" onClick={toggle}>
              <a href="#!" className="text-body">
                <i className="fas fa-long-arrow-alt-left me-3"></i>
                Continue shopping
              </a>
            </h5>
          </div>
          <div className="card-body p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <p className="mb-1">Shopping cart</p>
                <p className="mb-0">You have 4 items in your cart</p>
              </div>
              <div>
                <p className="mb-0">
                  <span className="text-muted">Sort by:</span>{" "}
                  <a href="#!" className="text-body">
                    price <i className="fas fa-angle-down mt-1"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>

          {JSON.stringify(products)}

          {products.map((product) => (
            <div className="card shadow mb-3">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                        className="img-fluid rounded-3"
                        alt="Shopping item"
                        style={{ width: "65px" }}
                      />
                    </div>
                    <div className="ms-3">
                      <h5>{product.text}</h5>
                      <p className="small mb-0">256GB, Navy Blue</p>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center">
                    {/* <div style="width: 50px;"> */}
                    <h5 className="fw-normal mb-0">2</h5>
                  </div>
                  <div style={{ width: "80px" }}>
                    <h5 className="mb-0">{product.price} Bs</h5>
                  </div>
                  <a href="#!" style={{ color: "#cecece" }}>
                    <i className="fas fa-trash-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  ) : (
    <></>
  );
}
const mapStateToProps = (state) => {
  return { ...state.car };
};
export default connect(mapStateToProps)(ShoppinCar);
