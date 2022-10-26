import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsuarioService } from "../../usuario/services/usuario.services";
import { Bcrypt } from "../bcrypt/bcrypt";


@Injectable()
export class AuthService {
    constructor (
        private usuarioService: UsuarioService,
        private jwtService: JwtService,
        private bcrypt: Bcrypt
    ) {}

    async validateUser (username: string, password: string): Promise <any> {
        const buscaUsuario = await this.usuarioService.findByUsuario(username)

        if(!buscaUsuario)
            throw new HttpException('usuario nao encontrado' , HttpStatus.NOT_FOUND)

        const match = await this.bcrypt.compararSenhas(password, buscaUsuario.senha);

        if (buscaUsuario && match) {
            const { senha, ...result } = buscaUsuario;
            return result;
        }

        return null
    }

    async login (usuarioLogin: any) {
        const payLoad = {
            username: usuarioLogin.usuario,
            sub: 'blogpessoal'
        };

        return {
            usuario : usuarioLogin.usuario,
            token: `Bearer ${this.jwtService.sign(payLoad)}`
        }
    }
}

