import { Postagem } from "../entities/postagem.entity";
import { PostagemServices } from "../services/postagem.services";
export declare class PostagemController {
    private readonly PostagemServices;
    constructor(PostagemServices: PostagemServices);
    findAll(): Promise<Postagem[]>;
    findById(id: number): Promise<Postagem>;
    finByTitulo(titulo: string): Promise<Postagem[]>;
    create(postagem: Postagem): Promise<Postagem>;
    update(postagem: Postagem): Promise<Postagem>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
