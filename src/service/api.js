import axios from "axios";

// export const apiServidor = axios.create({
//   baseURL: "https://goncalvesmatheus.com", // Ajuste conforme necessário
// });

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

export async function getProdutos() {
  try {
    const url = "/products";
    return await api.get(url);
  } catch (error) {
    return error;
  }
}

export async function getCategorias() {
  try {
    const url = "/categories";
    return await api.get(url);
  } catch (error) {
    return error;
  }
}

// export default api;
