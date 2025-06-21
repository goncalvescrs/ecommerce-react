import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.cristianogoncalves.tech",
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
