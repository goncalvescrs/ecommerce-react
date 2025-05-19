import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Cadastro from "../pages/Cadastro/Cadastro";
import Login from "../pages/Login/Login";
import Categoria from "../pages/Categoria/Categoria";
import Produto from "../pages/Produto/Produto";
import Carrinho from "../pages/Carrinho/Carrinho";
import CompraRealizada from "../pages/CompraRealizada/CompraRealizada";
import Busca from "../pages/busca/Busca";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cadastro" element={<Cadastro />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/busca" element={<Busca />} />
          <Route
            exact
            path="/categoria/:nomeCategoria"
            element={<Categoria />}
          />
          <Route exact path="/produto/:id" element={<Produto />} />
          <Route exact path="/carrinho" element={<Carrinho />} />
          <Route exact path="/compra-realizada" element={<CompraRealizada />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
