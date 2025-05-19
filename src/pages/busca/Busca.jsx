import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Cabecalho from "../../components/cabecalho/Cabecalho";
import { api } from "../../service/api";
import CardProduto from "../../components/CardProduto/CardProduto";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/banner/Banner";
import "./busca.css";
import Loader from "../../components/loader/Loader";

const Busca = () => {
  const [produtos, setProdutos] = useState([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();
  const termoDeBusca = searchParams.get("q") || "";

  console.log("Termo: ", termoDeBusca);
  console.log("Produtos com termo: ", produtosFiltrados);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await api.get("/products");
        setProdutos(response.data);
      } catch (error) {
        console.error("Erro ao buscar os produtos:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProdutos();
  }, []);

  useEffect(() => {
    const filtroBusca = produtos.filter(
      (produto) =>
        produto.name.toLowerCase().includes(termoDeBusca.toLowerCase()) ||
        produto.description.toLowerCase().includes(termoDeBusca.toLowerCase())
    );
    setProdutosFiltrados(filtroBusca);
  }, [produtos, termoDeBusca]);

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <>
      <Cabecalho />
      <h3 className="tituloResultado">
        {"Resultado do termo buscado: "}
        {termoDeBusca}
      </h3>

      <div className="style-produto">
        {loading ? (
          <Loader />
        ) : produtosFiltrados.length > 0 && termoDeBusca.length ? (
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
        ) : (
          <>
            <h5 style={{ margin: "3rem 0 10rem 0" }}>
              Nenhum produto encontrado...
            </h5>
          </>
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

export default Busca;
