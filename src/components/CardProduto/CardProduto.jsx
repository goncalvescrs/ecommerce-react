import { LiaShippingFastSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import "./CardProduto.css";

const CardProduto = ({ id, nome, imgUrl, descricao, preco, likes }) => {
  return (
    <span className="container-card">
      <a href={`/produto/${id}`} className="linkCard">
        <div className="card2">
          <div className="imagemCard">
            <img src={imgUrl} alt={descricao} />
          </div>
          <div className="infCard">
            <span className="infos">
              <h2 className="titulo">{nome}</h2>
              <span className="likes">
                <CiHeart fontSize={"16px"} /> {}
              </span>
              <h3 className="preco">R$ {preco}</h3>
              <h4 className="cartao">No pix ou 12x no cartão</h4>
              <span className="frete">
                Frete Grátis <LiaShippingFastSolid fontSize={"18px"} />
              </span>
            </span>
          </div>
        </div>
      </a>
    </span>
  );
};

export default CardProduto;
