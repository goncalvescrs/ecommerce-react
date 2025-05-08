import { useEffect, useState } from "react";
import api from "../../api/api";
import Banner from "../../components/Banner";
import Cabecalho from "../../components/cabecalho/Cabecalho";
import Footer from "../../components/Footer/Footer";
import "./home.css";
import CardProduto from "../../components/CardProduto/CardProduto";
// import Buscar from "../../components/buscar/Buscar";
import Paginacao from "../../components/paginacao/Paginacao";

const Home = () => {
  const [produtos, setProdutos] = useState([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  const [termoDeBusca, setTermoDeBusca] = useState("");

  useEffect(() => {
    getTodosOsProdutos();
  }, []);

  const getTodosOsProdutos = async () => {
    const response = await api.get("/produto");
    setProdutos(response.data);
  };

  useEffect(() => {
    const filtrado = produtos.filter(
      (produto) =>
        produto.nome.toLowerCase().includes(termoDeBusca.toLowerCase()) &&
        produto.quantidade > 0
    );
    setProdutosFiltrados(filtrado);
  }, [termoDeBusca, produtos]);

  return (
    <>
      <Cabecalho onSearch={setTermoDeBusca} />

      <div className="teste">
        {/* <div className="banner">
          <Banner
            img={
              "https://tpc.googlesyndication.com/simgad/15464926730141309314?"
            }
            descrcao={"descricao do banner"}
          />
        </div> */}

        <div className="style-produto">
          {produtosFiltrados.map((produto) => (
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
        <Paginacao />
      </div>
      <Footer />
    </>
  );
};

export default Home;
