import { useEffect, useRef, useState } from "react";
import "./carrossel.css";
import { getProdutos } from "../../service/api";
import CardProduto from "../CardProduto/CardProduto";
import Loader from "../loader/Loader";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

function Carrossel({ titulo, produtos, destino }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const carrossel = useRef(null);

  useEffect(() => {
    if (produtos) setLoading(false);
  }, []);

  const handleClickEsquerdo = (e) => {
    e.preventDefault();
    carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
  };

  const handleClickDireito = (e) => {
    e.preventDefault();
    carrossel.current.scrollLeft += carrossel.current.offsetWidth;
  };

  const handleNavigate = () => {
    navigate(linkCategoria);
  };

  return (
    <>
      <div className="container_carrossel">
        <div className="titulo_container">
          <h3>{titulo}</h3>
          <div className="ver_todos">
            <a href={destino}>Ver todos os produtos...</a>
          </div>
        </div>

        <div className="carrossel">
          <div className="botao_esquerdo">
            <button className="botao" onClick={handleClickEsquerdo}>
              {/* <img src="/chevron_icon.png" alt="" /> */}
              <IoIosArrowForward size={"30px"} />
            </button>
          </div>
          <div className="carrossel_produtos" ref={carrossel}>
            {!loading ? (
              produtos.map((produto) => (
                <CardProduto
                  key={produto.id}
                  id={produto.id}
                  nome={produto.name}
                  imgUrl={produto.imgUrl}
                  descricao={produto.description}
                  preco={produto.price}
                  // likes={produto.likes}
                />
              ))
            ) : (
              <Loader />
            )}
          </div>
          <div className="botao_direito">
            <button className="botao" onClick={handleClickDireito}>
              <IoIosArrowForward size={"30px"} />
              {/* <img src="/chevron_icon.png" alt="" /> */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carrossel;
