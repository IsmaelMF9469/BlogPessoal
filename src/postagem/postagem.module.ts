import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostagemController } from "./controllers/postagem.controller";
import { Postagem } from "./entities/postagem.entity";
import { PostagemServices } from "./services/postagem.services";

    @Module({
        imports:[TypeOrmModule.forFeature( [Postagem] )],
        providers: [PostagemServices],
        controllers: [PostagemController],
        exports: [TypeOrmModule]
    })

    export class PostagemModule{}