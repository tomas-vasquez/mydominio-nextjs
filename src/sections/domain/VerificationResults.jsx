import React, { Component } from "react";
import { extensions } from "../../helpers/searchDomain";
import SingleItemTable from "./SingleItemTable";

export default class SearchingDomain extends Component {
  verificationResults = this.props.verificationResults.data;

  render() {
    const { domainName, currentDomainExtension } = this.props;

    return (
      <div
        id="search-section"
        className="container-xxl domain"
        style={{ paddingTop: "90px", marginBottom: "90px" }}
      >
        <div className="container px-lg-6">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title position-relative text-center mx-auto mb-4 pb-4 wow fadeInUp"
                data-wow-delay="0.1s"
                // style={{ maxWidth: "800px" }}
              >
                {this.verificationResults.availableToRegister ? (
                  <>
                    <h1 className="mb-3">
                      <i className="fas fa-check text-success"></i>{" "}
                      Felicidades!!! <br />
                    </h1>
                    <h2 className="my-3">Si puede registrar: "{domainName}"</h2>

                    <p className="mb-1">
                      Somos proveedores de dominios web obtenga cualquier
                      extencion de dominio existente.
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
                        <tr className="m-5 table-success">
                          <th scope="row"></th>
                          <td className="fw-bold">{domainName}</td>
                          <td>
                            <i className="fas fa-check color-success"></i>{" "}
                            Disponible
                          </td>
                          <td>{currentDomainExtension.price} BOB</td>
                          <td>
                            <button className="btn btn-primary">
                              <i className="fas fa-shopping-cart color-success"></i>{" "}
                              anadir
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </>
                ) : (
                  <>
                    <h1 className="mb-3">
                      <i className="fas fa-times text-danger"></i> Upps!!!
                    </h1>
                    <h2 className="my-3">
                      No puede registrar: {this.props.domainName}
                    </h2>

                    <p className="mb-1">
                      El nombre de dominio <strong>ya fue registrado</strong>{" "}
                      con anterioridad, pruebe con otro nombre u otra extension
                      de dominio.
                    </p>
                  </>
                )}
              </div>
              <div
                className="section-title position-relative text-center mx-auto mb-4 pb-4 wow fadeInUp"
                data-wow-delay="0.1s"
                // style={{ maxWidth: "800px" }}
              >
                <h2 className="pt-5">
                  <i className="fas fa-exclamation text-info"></i> Pruebe
                  tambien:
                </h2>

                <p className="mb-1">
                  Puede provar con distintas extenciones de dominio:
                </p>

                <table className="table mt-5">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Dominio</th>
                      <th scope="col">Disponibilidad</th>
                      <th scope="col">Precio</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {extensions.map((extension, i) => {
                      return extension.text !== currentDomainExtension ? (
                        <SingleItemTable
                          key={this.props.domainName + i}
                          index={i}
                          domainName={this.props.domainName}
                          extension={extension}
                        />
                      ) : (
                        <></>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
