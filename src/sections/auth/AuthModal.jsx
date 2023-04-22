import React, { useContext, useState } from "react";
import { Button, Modal } from "reactstrap";

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import FirebaseContext from "../../contexts/FirebaseContext";
import { useRouter } from "next/router";

function AuthModal(props) {
  const firebase = useContext(FirebaseContext);

  const [modal, setModal] = useState(false);
  const router = useRouter();

  const toggle = () => {
    setModal(!modal);
  };

  const logoutHandler = () => {
    firebase.auth().signOut();
  };

  const { user } = props;

  return !user ? (
    <>
      <Button color="success" className="btn " onClick={toggle}>
        <i className="fa fa-sign-in-alt" />
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <div className="modal-body">
          <div className="domain text-center">
            <h1 className="mt-4 mb-2 text-primary text-shadow">
              <i className="fa fa-server me-3"></i>MyDominio
            </h1>
            <h4 className="mb-4">Adquiere tu dominio ya!</h4>
            <p className="mb-4">
              Unete a nuesta comunidad y desplega tu pagina web!.
            </p>
          </div>
          <StyledFirebaseAuth
            uiConfig={{
              signInFlow: "popup",
              signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
              ],
              callbacks: {
                signInSuccessWithAuthResult: (data) => {
                  toggle();
                  // router.reload();
                },
              },
            }}
            firebaseAuth={firebase.auth()}
          />
        </div>
      </Modal>
    </>
  ) : (
    <Button color="danger" className="btn " onClick={logoutHandler}>
      <i className="fa fa-sign-out-alt" />
    </Button>
  );
}

export default AuthModal;
