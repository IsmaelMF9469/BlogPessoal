import { Tema } from "../entities/tema.entity";
import { TemaService } from "../services/tema.services";
export declare class TemaController {
    private readonly temaService;
    constructor(temaService: TemaService);
    findAll(): Promise<Tema[]>;
    findById(id: number): Promise<Tema>;
    findBydescricao(descricao: string): Promise<Tema[]>;
    create(Tema: Tema): Promise<Tema>;
    update(Tema: Tema): Promise<Tema>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
