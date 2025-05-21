import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Cabecalho from "../../components/cabecalho/Cabecalho";
import { api, getCategorias, getProdutos } from "../../service/api";
import CardProduto from "../../components/CardProduto/CardProduto";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/banner/Banner";
import "./categoria.css";
import Loader from "../../components/loader/Loader";

const Categoria = () => {
  const { nomeCategoria } = useParams();
  // const [produtos, setProdutos] = useState([]);
  // const [termoDeBusca, setTermoDeBusca] = useState("");
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProdutos();
  }, [nomeCategoria]);

  const fetchProdutos = async () => {
    try {
      const response = await getProdutos();
      // setProdutos(response.data);
      const produtos = response.data;
      if (nomeCategoria === "todos") {
        setProdutosFiltrados(produtos);
      } else {
        const filtroProdutosDaCategoria = produtos.filter((produto) =>
          produto.categories?.some(
            (categoria) =>
              categoria.name?.toLowerCase().trim() ===
              nomeCategoria.toLowerCase().trim()
          )
        );
        setProdutosFiltrados(filtroProdutosDaCategoria);
      }
    } catch (error) {
      console.error("Erro ao buscar os produtos:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   if (nomeCategoria === "todos") {
  //     setProdutosFiltrados(produtos);
  //   } else {
  //     const filtroProdutosDaCategoria = produtos.filter((produto) =>
  //       produto.categories?.some(
  //         (categoria) =>
  //           categoria.name?.toLowerCase().trim() ===
  //           nomeCategoria.toLowerCase().trim()
  //       )
  //     );
  //     setProdutosFiltrados(filtroProdutosDaCategoria);
  //   }
  // }, [produtos, nomeCategoria]);

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <>
      <Cabecalho />
      <h2 className="nome-categoria">{nomeCategoria}</h2>

      <div className="style-produto">
        {loading ? (
          <Loader />
        ) : (
          produtosFiltrados.map((produto) => (
            <CardProduto
              key={produto.id}
              id={produto.id}
              nome={produto.name}
              preco={produto.price}
              imgUrl={produto.imgUrl}
              // quantidade={produto.quantidade}
            />
          ))
        )}
      </div>

      <div className="banner">
        <Banner
          img={"https://tpc.googlesyndication.com/simgad/10894917116371607010?"}
          descrcao={"descricao do banner"}
        />
      </div>

      <Footer />
    </>
  );
};

export default Categoria;
