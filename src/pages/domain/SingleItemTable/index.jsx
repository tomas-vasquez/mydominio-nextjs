import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import { checkAvailability } from "../../../helpers/searchDomain";
import { addProduct } from "../../../store/car_store/actions";

function SingleItemTable(props) {
  const {
    index,
    url,
    verificationResults: externalVerificationResults = null,
    extensions,
    addProduct,
    currentExchangeRate,
  } = props;

  const [verificationResults, setverificationResults] = useState(
    externalVerificationResults
  );

  var currentExtension = url.slice(url.indexOf("."));
  var extension = extensions.find((extension) => {
    return extension.text === currentExtension;
  });

  var currentPrice = extension.prices.find(
    (price) => price.id === currentExchangeRate.id
  );

  // console.log("??????" + JSON.stringify(currentExchangeRate));

  useEffect(() => {
    if (!externalVerificationResults)
      checkAvailability(url, (data) => {
        setverificationResults(data);
      });
  }, []);

  const onclickHandler = () => {
    alert("hola");
    addProduct(makeNewPoduct());
  };

  const makeNewPoduct = () => {
    return {
      type: "domain",
      name: url,
      price: extension.price,
      isUnique: true,
    };
  };

  return (
    <>
      {!verificationResults ? (
        <tr className="m-5">
          <th scope="row">{index}</th>
          <td className="fw-bold">{url}</td>
          <td>
            <i className="fas fa-spinner fa-spin "></i> Comprobando
          </td>
          <td>-</td>
        </tr>
      ) : verificationResults.availableToRegister ? (
        <tr className="m-5 table-success">
          <th scope="row">{index}</th>
          <td className="fw-bold">{url}</td>
          <td>
            <i className="fas fa-check color-success"></i> Disponible
          </td>
          <td>{currentPrice.value + " " + currentExchangeRate.text}</td>
          <td>
            <button className="btn btn-primary" onClick={onclickHandler}>
              <i className="fas fa-shopping-cart color-success"></i> anadir
            </button>
          </td>
        </tr>
      ) : (
        <tr className="m-5 ">
          <th scope="row">{index + 1}</th>
          <td className="fw-bold">{url}</td>
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
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    exchangeRates: state.settings.exchangeRates,
    extensions: state.settings.extensions,
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
