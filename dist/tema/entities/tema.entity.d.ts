import { Postagem } from "../../postagem/entities/postagem.entity";
export declare class Tema {
    id: number;
    descrição: string;
    data: Date;
    postagem: Postagem[];
}
