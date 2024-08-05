import axios from "axios";

const api = "https://cashflow20240803102917.azurewebsites.net";
export const register_user = async (data: any) => {
  try {
    const response = await axios.post(`${api}/user/create`, data);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const login_user = async (data: any) => {
  try {
    const response = await axios.post(`${api}/user/login`, data);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
