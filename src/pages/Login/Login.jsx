import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getItem, setItem } from "../../service/LocalStorageFuncs";
import { api } from "../../service/api";
import "./login.css";

const Login = () => {
  const [login, setLogin] = useState({ email: "", senha: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get("/users");
      const user = response.data.filter(
        (data) => data.email === login.email && data.senha === login.senha
      );

      if (user.length > 0) {
        alert("Login realizado com sucesso!");
        setItem("usuarioLogado", user); // Salva o usuário logado no localStorage

        const carrinho = getItem("carrinho") || [];
        if (!carrinho || carrinho.length === 0) {
          navigate("/");
        } else {
          navigate("/carrinho");
        }
      } else {
        alert("Usuário ou senha inválidos");
        handleZerar();
      }
    } catch (error) {
      console.error("Erro ao realizar login", error);
    }
  };

  const handleZerar = () => {
    setLogin({
      email: "",
      senha: "",
    });
  };
  const inputFocus = (title) => {
    return <span className="focus-input" data-placeholder={title}></span>;
  };
  return (
    <div className="container-login">
      <div className="wrap-login">
        <form onSubmit={handleSubmit} onReset={handleZerar}>
          <h2 className="login-form-title">
            <img src="" alt="" />
            Entre com seu Login
          </h2>
          <div className="wrap-input">
            <input
              required
              type="email"
              name="email"
              onChange={handleChange}
              className="input"
              value={login.email}
            />
            {inputFocus("E-mail")}
          </div>
          <div className="wrap-input">
            <input
              required
              type="password"
              name="senha"
              onChange={handleChange}
              className="input"
              value={login.senha}
            />
            {inputFocus("Senha")}
          </div>
          <div className="text-center">
            <a href="#" className="txt2">
              Esqueceu a senha?
            </a>

            <span className="txt1">
              Não tem conta?
              <Link to="/Cadastro" className="txt2">
                Registrar
              </Link>
            </span>
            <br />
          </div>
          <div className="container-login-form-btn">
            <button type="submit" className="login-form-btn">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
