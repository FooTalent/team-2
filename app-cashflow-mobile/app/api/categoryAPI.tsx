import axios from "axios";

const api = "https://cashflow20240803102917.azurewebsites.net";
export const getCategories = async () => {
  const response = await axios.get(`${api}/Categorias`);
  return response.data;
};
