import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { validateAndPurgeDomainName } from "../../helpers/searchDomain";

function Hero(props) {
  const { onSubmitHandler, extensions } = props;

  const [text, setText] = useState("");
  const [currentDomainExtension, setCurrentDomainExtension] = useState();

  const router = useRouter();
  const { url } = router.query;

  useEffect(() => {
    if (url) {
      var newText = url.split(".")[0];
      var newCurrentDomainExtension = url.slice(url.indexOf("."));
      setCurrentDomainExtension(newCurrentDomainExtension);
      setText(newText);
    }
  }, [url]);

  var onInputChangetHandler = (e) => {
    e.preventDefault();
    const text = e.target.value;
    var newText = validateAndPurgeDomainName(text);
    setText(newText);
  };

  var onSelectChange = (e) => {
    e.preventDefault();
    setCurrentDomainExtension(e.target.value);
  };

  return (
    <div className="container-xxl pt-5 bg-primary hero-header mb-0">
      <div className="container mt-5 mb-4 py-5 px-lg-4">
        <div className="row g-5 pt-5">
          <div className="col-12 text-center text-lg-start">
            <h1 className="display-4 text-white animated slideInLeft">
              Registro de dominios
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center justify-content-lg-start animated slideInLeft">
                <li className="breadcrumb-item">
                  <a className="text-white" href="#">
                    Inicio
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a className="text-white" href="#">
                    Dominios
                  </a>
                </li>
              </ol>
            </nav>

            <form
              onSubmit={onSubmitHandler}
              className="form mt-5 animated slideInLeft"
            >
              <input
                required
                minLength={2}
                onChange={onInputChangetHandler}
                className="form-control shadow-lg bg-white border-0 w-80 py-3 ps-4 pe-5"
                type="text"
                value={text}
                placeholder="Enter your email"
              ></input>

              <div className="position-absolute top-0 end-0 d-flex">
                <select
                  className="form-select py-2 px-3 mt-2 me-2 "
                  name="extension"
                  value={currentDomainExtension}
                  onChange={onSelectChange}
                  style={{ minWidth: "85px" }}
                >
                  {extensions.map((extension) => (
                    <option key={extension.id} value={extension.text}>
                      {extension.text}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="d-flex btn btn-primary py-2 mt-2 pe-0 me-2"
                >
                  Registrar{"   "}{" "}
                  <i className="pe-2 pt-1 px-2 fa fa-arrow-right" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    extensions: state.settings.extensions,
  };
};

export default connect(mapStateToProps)(Hero);
