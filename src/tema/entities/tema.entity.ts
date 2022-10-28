import { IsNotEmpty } from "class-validator";
import { Postagem } from "../../postagem/entities/postagem.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: "tb_temas"})
export class Tema {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @IsNotEmpty()
    @Column({length: 255, nullable:false})
    @ApiProperty()
    descrição: string

    @UpdateDateColumn()
    data: Date;
    
    @ApiProperty()
    @OneToMany(() =>Postagem, (postagem) => postagem.tema, )
        postagem:Postagem [];


}