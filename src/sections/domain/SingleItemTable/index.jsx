import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import { checkAvailability } from "../../../helpers/searchDomain";
import { addProduct } from "../../../store/car_store/actions";

function SingleItemTable(props) {
  const { index, domainName, extension } = props;

  const targetDomainName = domainName.split(".")[0] + extension.text;

  const [consulting, setConsulting] = useState(true);
  const [verificationResults, setVerificationResults] = useState({});

  useEffect(() => {
    checkAvailability(targetDomainName, setConsulting, setVerificationResults);
  }, []);

  const { addProduct } = props;

  const onclickHandler = () => {
    addProduct(makeNewPoduct());
  };

  const makeNewPoduct = () => {
    return {
      type: "domain",
      domainName,
      price: extension.price,
      isUnique: true,
    };
  };

  return (
    <>
      {consulting ? (
        <>
          <tr className="m-5">
            <th scope="row">{index + 1}</th>
            <td className="fw-bold">{targetDomainName}</td>
            <td>
              <i className="fas fa-spinner fa-spin "></i> Comprobando
            </td>
            <td>-</td>
          </tr>
        </>
      ) : verificationResults.data.availableToRegister ? (
        <>
          <tr className="m-5 table-success">
            <th scope="row">{index + 1}</th>
            <td className="fw-bold">{targetDomainName}</td>
            <td>
              <i className="fas fa-check color-success"></i> Disponible
            </td>
            <td></td>
            <td>
              <button className="btn btn-primary" onClick={onclickHandler}>
                <i className="fas fa-shopping-cart color-success"></i> anadir
              </button>
            </td>
          </tr>
        </>
      ) : (
        <>
          <tr className="m-5 ">
            <th scope="row">{index + 1}</th>
            <td className="fw-bold">{targetDomainName}</td>
            <td>
              <i className="fas fa-times color-success"></i> No disponible
            </td>
            <td>-</td>
            <td>
              <button className="btn btn-light">
                <i className="fas fa-eye color-success"></i> visitar
              </button>
            </td>
          </tr>
        </>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    exchangeRates: state.settings.exchangeRates,
    currentExchangeRate: state.settings.currentExchangeRate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    addProduct: (product) => dispatch(addProduct(product)),
    addProduct: (product) => dispatch(addProduct(product)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SingleItemTable);
