import { DeleteResult, Repository } from "typeorm";
import { Tema } from "../entities/tema.entity";
export declare class TemaService {
    private temaRepository;
    constructor(temaRepository: Repository<Tema>);
    findAll(): Promise<Tema[]>;
    findById(id: number): Promise<Tema>;
    findByDescricao(descricao: string): Promise<Tema[]>;
    create(Tema: Tema): Promise<Tema>;
    update(tema: Tema): Promise<Tema>;
    delete(id: number): Promise<DeleteResult>;
}
