import { Link } from "react-router-dom";
import "./cabecalho.css";
import { TiShoppingCart } from "react-icons/ti";
import { getItem } from "../../services/LocalStorageFuncs";
import Buscar from "../buscar/Buscar";

const Cabecalho = ({ onSearch }) => {
  const carrinho = getItem("carrinho");

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary position-relative"
      data-bs-theme="dark"
    >
      <div className="container-fluid container">
        <a className="navbar-brand" href={"/"}>
          Loja
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Principal
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href={"/categoria/mochila"}>
                Mochilas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={"/categoria/eletronico"}>
                Eletronicos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
          {/* ----------------- Search ----------------- */}
          {/* <Buscar onSearch={onSearch} /> */}

          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </nav>
        </div>
        {/* ----------------- settings-------------- */}
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Cabecalho;
