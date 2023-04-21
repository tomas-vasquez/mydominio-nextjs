import React, { Component } from "react";
import { connect } from "react-redux";
import SingleItemTable from "../SingleItemTable";

class OtherAvailableExtensionsSection extends Component {
  render() {
    const { url, extensions } = this.props;
    var currentExtension = url.slice(url.indexOf("."));
    var tableIndex = 0;
    return (
      <div
        className="section-title position-relative text-center mx-auto mb-4 pb-4 animated fadeInUp"
        data-wow-delay="0.1s"
        // style={{ maxWidth: "800px" }}
      >
        <h2 className="pt-5">
          <i className="fas fa-exclamation text-info"></i> Pruebe tambien:
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
            {extensions.map((extension) => {
              if (extension.text !== currentExtension) {
                tableIndex = tableIndex + 1;

                var domainName = url.split(".")[0];
                var newUrl = domainName + extension.text;

                return (
                  <SingleItemTable
                    key={extension.text}
                    index={tableIndex}
                    url={newUrl}
                  />
                );
              } else {
                return <tr key={extension.text}></tr>;
              }
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    extensions: state.settings.extensions,
  };
};

export default connect(mapStateToProps)(OtherAvailableExtensionsSection);
