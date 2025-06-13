import axios from "axios";

export const api = axios.create({
  baseURL: "http://137.131.167.56:8080",
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
