import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../service/api";
import Cabecalho from "../../components/cabecalho/Cabecalho";
import { setItem, getItem } from "../../service/LocalStorageFuncs";
import "./produto.css";
import Footer from "../../components/Footer/Footer";
import { FaHeart } from "react-icons/fa";

const ProdutoEspecifico = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState({});
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const itensCarrinho = getItem("carrinho");
    if (itensCarrinho) {
      setCart(itensCarrinho);
    }
    getProduto();
  }, []);

  const getProduto = async () => {
    const response = await api.get(`/products/${id}`);
    setProduto(response.data);
  };
  // console.log(produto);

  const handleLikeClick = async () => {
    const response = await api.patch(`/produto/${id}`, {
      likes: produto.likes + 1,
    });
    // window.location.reload();
  };
  // useEffect(() => {}, [produto.likes]);

  const handleClickCarrinho = (obj) => {
    const element = cart.find((e) => e.id == obj.id);

    if (!element) {
      const updatedCart = [...cart, obj];
      setCart(updatedCart);
      setItem("carrinho", updatedCart);
    }
  };

  return (
    <>
      <Cabecalho />

      <div className="produto">
        <img src={produto.imgUrl} alt={produto.description} />
        <div className="info">
          <p>{produto.name}</p>
          <p>{produto.description}</p>
          <h5>R$ {produto.price}</h5>
          <h6>{produto.categoria}</h6>
          <h6>Estoque: {produto.quantidade}</h6>
          <button className="likes" onClick={handleLikeClick}>
            <FaHeart /> ({produto.likes})
          </button>
          <br />
          <button onClick={() => handleClickCarrinho(produto)}>
            Adicionar ao Carrinho
          </button>
          <a href="/carrinho" onClick={() => handleClickCarrinho(produto)}>
            <button>Finalizar compra</button>
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProdutoEspecifico;
