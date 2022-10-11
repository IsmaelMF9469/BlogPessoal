import { DeleteResult, Repository } from "typeorm";
import { Postagem } from "../entities/postagem.entity";
export declare class PostagemServices {
    private postagemRepository;
    constructor(postagemRepository: Repository<Postagem>);
    findAll(): Promise<Postagem[]>;
    findById(id: number): Promise<Postagem>;
    findByTitulo(titulo: string): Promise<Postagem[]>;
    create(postagem: Postagem): Promise<Postagem>;
    update(postagem: Postagem): Promise<Postagem>;
    delete(id: number): Promise<DeleteResult>;
}
