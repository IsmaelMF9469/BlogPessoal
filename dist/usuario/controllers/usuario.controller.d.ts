import { Usuario } from "../entities/usuario.entity";
import { UsuarioService } from "../services/usuario.services";
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    findAll(): Promise<Usuario[]>;
    create(usuario: Usuario): Promise<Usuario>;
    update(usuario: Usuario): Promise<Usuario>;
}
