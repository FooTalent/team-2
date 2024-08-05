import axios from "axios"
const api = "https://cashflow20240803102917.azurewebsites.net";
export const getMoneyUser = async (id: string) => {
    const response = await axios.get(`${api}/money?Id=${id}`)
    return response.data
}
