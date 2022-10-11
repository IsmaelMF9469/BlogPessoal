import { Tema } from "src/tema/entities/tema.entity";
export declare class Postagem {
    id: number;
    titulo: string;
    texto: string;
    data: Date;
    tema: Tema;
}
