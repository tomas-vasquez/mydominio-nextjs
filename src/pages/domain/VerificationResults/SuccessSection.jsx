import React, { Component } from "react";
import SingleItemTable from "../SingleItemTable";

export default class SuccessSection extends Component {
  render() {
    const { url, verificationResults } = this.props;

    return (
      <>
        {verificationResults.availableToRegister ? (
          <>
            <h1 className="mb-3">
              <i className="fas fa-check text-success"></i> Felicidades!!!{" "}
              <br />
            </h1>
            <h2 className="my-3">Si puede registrar: "{url}"</h2>

            <p className="mb-1">
              Somos proveedores de dominios web obtenga cualquier extencion de
              dominio existente.
            </p>

            <table className="table d-float mt-5">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Dominio</th>
                  <th scope="col">Disponibilidad</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <SingleItemTable
                  index={""}
                  url={url}
                  verificationResults={verificationResults}
                />
              </tbody>
            </table>
          </>
        ) : (
          <>
            <h1 className="mb-3">
              <i className="fas fa-times text-danger"></i> Upps!!!
            </h1>
            <h2 className="my-3">No puede registrar: {url}</h2>

            <p className="mb-1">
              El nombre de dominio <strong>ya fue registrado</strong> con
              anterioridad, pruebe con otro nombre u otra extension de dominio.
            </p>
          </>
        )}
      </>
    );
  }
}
