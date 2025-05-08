import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Cabecalho from "../../components/cabecalho/Cabecalho";
import api from "../../api/api";
import CardProduto from "../../components/CardProduto/CardProduto";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner";
import "./categoria.css";

const Categoria = () => {
  const { nomeCategoria } = useParams();
  const [produtos, setProdutos] = useState([]);
  const [termoDeBusca, setTermoDeBusca] = useState("");
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProdutos();
  }, []);

  const fetchProdutos = async () => {
    try {
      const response = await api.get("/produto");
      setProdutos(response.data);
    } catch (error) {
      console.error("Erro ao buscar os produtos:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const filtroProdutosDaCategoria = produtos.filter(
      (produto) => produto.categoria === nomeCategoria
    );
    const filtrado = filtroProdutosDaCategoria.filter(
      (produto) =>
        produto.nome.toLowerCase().includes(termoDeBusca.toLowerCase()) &&
        produto.quantidade > 0
    );
    setProdutosFiltrados(filtrado);
  }, [termoDeBusca, produtos, nomeCategoria]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <>
      <Cabecalho onSearch={setTermoDeBusca} />
      <h2 className="nome-categoria">Categoria {nomeCategoria}</h2>

      <div className="style-produto">
        {produtosFiltrados
          .filter((produto) => produto.quantidade > 0)
          .map((produto) => (
            <CardProduto
              key={produto.id}
              id={produto.id}
              nome={produto.nome}
              imgUrl={produto.imgUrl}
              descricao={produto.descricao}
              preco={produto.preco}
              likes={produto.likes}
            />
          ))}
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
