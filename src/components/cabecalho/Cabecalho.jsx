import { Link } from "react-router-dom";
import "./cabecalho.css";
import { TiShoppingCart } from "react-icons/ti";
import { getItem } from "../../service/LocalStorageFuncs";
import Buscar from "../buscar/Buscar";
import { FaCarTunnel } from "react-icons/fa6";
import { BiCart, BiUser } from "react-icons/bi";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import Logo from "../../assets/image/logo-ecommerce.png";

const Cabecalho = () => {
  const carrinho = getItem("carrinho");

  return (
    <nav className="navbar navbar-expand-lg custom_navbar">
      <div className="container-fluid container">
        <a className="logo navbar-brand" href={"http://localhost:5173"}>
          <img src={Logo} alt="" />
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
          <ul className="nav_links navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Principal
              </a>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to={"/categoria/eletronicos"}>
                <h3 className="texto_link">Eletronicos</h3>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/categoria/livros"}>
                <h4 className="texto_link">Livros</h4>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/categoria/computadores"}>
                <h4 className="texto_link">Computador</h4>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/categoria/mochilas"}>
                <h4 className="texto_link">Mochilas</h4>
              </Link>
            </li>
          </ul>
          {/* ---------------- Search ----------------- */}
          <div className="buscar">
            <Buscar />
          </div>
        </div>
        {/* ----------------- carrinho-------------- */}
        <a className="cart" href="/carrinho">
          <div className="icone_cart">
            <BiCart color="#FFF" fontSize={"35px"} />
          </div>
          {carrinho?.length > 0 ? (
            <div className="quantidade_itens">
              <span>{carrinho.length}</span>
            </div>
          ) : null}
        </a>

        {/* ------------- Usuario ------------ */}
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <BiUser size={"28px"} />
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
