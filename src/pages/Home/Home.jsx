import { useEffect, useState } from "react";
import { api } from "../../service/api";
import Banner from "../../components/banner/Banner";
import Cabecalho from "../../components/cabecalho/Cabecalho";
import Footer from "../../components/Footer/Footer";
import "./home.css";
import CardProduto from "../../components/CardProduto/CardProduto";
// import Buscar from "../../components/buscar/Buscar";
import Paginacao from "../../components/paginacao/Paginacao";
import { getProdutos } from "../../service/api";
import Loader from "../../components/loader/Loader";

const Home = () => {
  const [produtos, setProdutos] = useState([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [termoDeBusca, setTermoDeBusca] = useState("");
  console.log("produtos no state: ", produtos);

  useEffect(() => {
    allProdutos();
  }, []);

  const allProdutos = async () => {
    const response = await getProdutos();
    setProdutos(response.data);
    setLoading(false);
  };

  useEffect(() => {
    const filtrado = produtos.filter(
      (produto) =>
        produto.name.toLowerCase().includes(termoDeBusca.toLowerCase())
      // && produto.quantidade > 0
    );
    setProdutosFiltrados(filtrado);
  }, [termoDeBusca, produtos]);
  console.log("filtrado", produtosFiltrados);

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
          {loading ? (
            <Loader />
          ) : (
            produtosFiltrados.map((produto) => (
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
          )}
        </div>
        <Paginacao />
      </div>
      <Footer />
    </>
  );
};

export default Home;
