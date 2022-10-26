import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Bcrypt } from "../../auth/bcrypt/bcrypt";
import { Repository } from "typeorm";
import { Usuario } from "../entities/usuario.entity";

@Injectable()
export class UsuarioService {
    
    constructor (
        @InjectRepository(Usuario)
        private usuarioRepositoy: Repository <Usuario>,
        private bcrypt: Bcrypt
    ) {}

    async findByUsuario (usuario: string): Promise <Usuario>{
        return await this.usuarioRepositoy.findOne ({
            where:{
                usuario: usuario
            }
        })
    }

    async findAll (): Promise <Usuario[]>{
        return await this.usuarioRepositoy.find({
            relations:{
                postagem: true
            }
        })
    } 

    async findById (id: number): Promise <Usuario>{
        let usuario = await this.usuarioRepositoy.findOne ({

            where: {
                id
            },
            relations: {
                postagem: true
            }
        });

        if(!usuario)
        throw new HttpException('Usuario não encontrado!', HttpStatus.NOT_FOUND );

        return usuario;
    }

    async create(usuario: Usuario): Promise <Usuario> {
    
        let buscaUsuario = await this.findByUsuario(usuario.usuario);

        if (!buscaUsuario) {
        usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha)
        return await this.usuarioRepositoy.save(usuario);
        }

        throw new HttpException('O usuario já existe! ', HttpStatus.BAD_REQUEST);
    }

    async update(usuario:  Usuario): Promise <Usuario> {

        let updateUsuario: Usuario = await this.findById(usuario.id);
        let buscaUsuario = await this.findByUsuario(usuario.usuario)

        if (!updateUsuario)
            throw new HttpException('Usuario não encontrado! ', HttpStatus.NOT_FOUND );

        if(!buscaUsuario && buscaUsuario.id !== usuario.id )
            throw new HttpException('Usuario (e-mail) já cadastrado !', HttpStatus.BAD_REQUEST);
    
        usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha)
        return await this.usuarioRepositoy.save(usuario);
    }
}