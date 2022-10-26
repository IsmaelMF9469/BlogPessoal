import { IsNotEmpty } from "class-validator";
import { Postagem } from "../../postagem/entities/postagem.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "tb_temas"})
export class Tema {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 255, nullable:false})
    descrição: string

    @UpdateDateColumn()
    data: Date;

    @OneToMany(() =>Postagem, (postagem) => postagem.tema, )
        postagem:Postagem [];


}