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
import Carrossel from "../../components/carrossel/Carrossel";
import { useNavigate } from "react-router-dom";
import Skeleton from "../../components/skeleton/Skeleton ";

const Home = () => {
  // const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  // const [termoDeBusca, setTermoDeBusca] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [eletronicos, setEletronicos] = useState([]);
  const [mochilas, setMochilas] = useState([]);
  const [livros, setLivros] = useState([]);
  const navigate = useNavigate();

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
  function secaoLivros() {
    const filtroLivros = produtos.filter((produto) =>
      produto.categories?.some((categoria) => categoria.name === "Livros")
    );
    setLivros(filtroLivros);
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
    secaoLivros();
  }, [produtos]);

  return (
    <>
      <Cabecalho />
      {!loading ? (
        <>
          {/* <div className="banner">
            <Banner
              img={
                "https://tpc.googlesyndication.com/simgad/15464926730141309314?"
              }
              descrcao={"descricao do banner"}
            />
          </div> */}

          <Carrossel
            titulo={"Todos os produtos..."}
            produtos={produtos}
            destino={"/categoria/todos"}
          />
          <Carrossel
            titulo={"Livros..."}
            produtos={livros}
            destino={"/categoria/livros"}
          />
          {/* <div className="banner">
            <Banner
              img={
                "https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2F44223132-1f6f-470e-85de-f583a6d1e5d3___c6a6de46d83a19b46f33179776be68bd.png&w=1440&q=90"
              }
              descrcao={"descricao do banner"}
            />
          </div> */}
          <Carrossel
            titulo={"Eletronicos..."}
            produtos={eletronicos}
            destino={"/categoria/eletronicos"}
          />
        </>
      ) : (
        <Skeleton />
      )}

      <Footer />
    </>
  );
};

export default Home;
