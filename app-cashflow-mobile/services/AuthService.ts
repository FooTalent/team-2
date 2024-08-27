import axios from "axios";
import { pathsUrl } from "./paths/paths";
import { RegisterUserDto } from "@/types/dto/register-user.dto";
import { LoginUserDto } from "@/types/dto/login-user.dto";
export class AuthService {
    private BASE_URL = "https://cashflow20240803102917.azurewebsites.net"


    async register(data: RegisterUserDto) {
        const response = await axios.post(`${this.BASE_URL}${pathsUrl.register_user}`, data)
        return response.data;
    }

    async login(data: LoginUserDto) {
        console.log("LOGIN USER: ", data);
        
        const response = await axios.post(`${this.BASE_URL}${pathsUrl.login_user}`, data)
        return response.data;
    }
}