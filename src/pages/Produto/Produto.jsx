import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api, getProdutos } from "../../service/api";
import Cabecalho from "../../components/cabecalho/Cabecalho";
import { setItem, getItem } from "../../service/LocalStorageFuncs";
import "./produto.css";
import Footer from "../../components/Footer/Footer";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Skeleton from "../../components/skeleton/Skeleton ";

const ProdutoEspecifico = () => {
  const { nome } = useParams();
  const [produto, setProduto] = useState({});
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(produto);

  useEffect(() => {
    const itensCarrinho = getItem("carrinho");
    if (itensCarrinho) {
      setCart(itensCarrinho);
    }
    getProduto();
  }, []);

  const getProduto = async () => {
    const response = await getProdutos();
    const produtoFiltrado = response.data.filter(
      (produto) => produto.name === nome
    );
    setProduto(produtoFiltrado[0]);
    setLoading(false);
  };
  console.log(produto);

  const handleLikeClick = async () => {
    const response = await api.patch(`/produto/${id}`, {
      likes: produto.likes + 1,
    });
    window.location.reload();
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

      {loading ? (
        <Skeleton />
      ) : (
        <>
          <div className="produto">
            <img src={produto.imgUrl} alt={produto.description} />
            <div className="info">
              <p>{produto.name}</p>
              <p>{produto.description}</p>
              <h5>R$ {produto.price}</h5>
              <h6>{produto.categoria}</h6>
              <h6>Estoque: {produto.quantidade}</h6>
              <span className="likes" onClick={handleLikeClick}>
                <CiHeart fontSize={"26px"} style={{ marginRight: ".5rem" }} />{" "}
                {}
              </span>
              <br />
              <button onClick={() => handleClickCarrinho(produto)}>
                Adicionar ao Carrinho
              </button>
              <a href="/carrinho" onClick={() => handleClickCarrinho(produto)}>
                <button>Finalizar compra</button>
              </a>
            </div>
          </div>
        </>
      )}

      <Footer />
    </>
  );
};

export default ProdutoEspecifico;
