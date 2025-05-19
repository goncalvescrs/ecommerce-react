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
  // const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  // const [termoDeBusca, setTermoDeBusca] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [eletronicos, setEletronicos] = useState("");
  const [mochilas, setMochilas] = useState("");

  const allProdutos = async () => {
    const response = await getProdutos();
    setProdutos(response.data);
    setLoading(false);
  };

  useEffect(() => {
    allProdutos();
  }, []);

  function secaoEletronicos() {
    const filtroEletronicos = produtos.filter((produto) =>
      produto.categories?.some((categoria) => categoria.name === "Eletronicos")
    );
    setEletronicos(filtroEletronicos);
  }

  function secaoMochilas() {
    const filtroMochilas = produtos.filter((produto) =>
      produto.categories?.some((categoria) => categoria.name === "Mochilas")
    );
    setMochilas(filtroMochilas);
  }

  useEffect(() => {
    // const filtrado = produtos.filter(
    //   (produto) =>
    //     produto.name.toLowerCase().includes(termoDeBusca.toLowerCase())
    //   // && produto.quantidade > 0
    // );
    // setProdutosFiltrados(filtrado);

    secaoEletronicos();
    secaoMochilas();
  }, [produtos]);

  return (
    <>
      <Cabecalho />

      <div className="teste">
        {/* <div className="banner">
          <Banner
            img={
              "https://tpc.googlesyndication.com/simgad/15464926730141309314?"
            }
            descrcao={"descricao do banner"}
          />
        </div> */}
        <div style={{ width: "100%", paddingLeft: "2rem" }}>
          <h3>Mochilas...</h3>
          {/* <br /> */}
        </div>
        <div className="style-produto">
          {loading ? (
            <Loader />
          ) : (
            mochilas.map((produto) => (
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
          <div style={{ width: "100%", marginLeft: "2rem" }}>
            <h3>Eletronicos...</h3>
            <br />
          </div>
          {loading ? (
            <Loader />
          ) : (
            eletronicos.map((produto) => (
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
