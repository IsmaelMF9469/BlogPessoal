import { UsuarioLogin } from "../entities/usuariologin.entity";
import { AuthService } from "../services/auth.service";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    Login(user: UsuarioLogin): Promise<any>;
}
