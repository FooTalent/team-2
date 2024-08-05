import axios from "axios";
import { pathsUrl } from "./paths/paths";
export class MoneyService {
    private BASE_URL = "https://cashflow20240803102917.azurewebsites.net"


    async getMoney(userId: number): Promise<MoneyResponse> {
        const response = await axios.get(`${this.BASE_URL}${pathsUrl.get_money}?id=${userId}`)
        return response.data;
    }
}