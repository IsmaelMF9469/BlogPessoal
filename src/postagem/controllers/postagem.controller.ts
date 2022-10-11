import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post } from "@nestjs/common";
import { Delete, Put } from "@nestjs/common/decorators";
import { Postagem } from "../entities/postagem.entity";
import { PostagemServices } from "../services/postagem.services";

@Controller('/postagens')
export class PostagemController {
    constructor (private readonly PostagemServices: PostagemServices){}

        @Get()
        @HttpCode(HttpStatus.OK)
        findAll(): Promise <Postagem[]>{
            return this.PostagemServices.findAll();
        }

        @Get('/:id')
        @HttpCode(HttpStatus.OK)
        findById (
            @Param ('id',ParseIntPipe)
            id: number
         ): Promise <Postagem> {
            return this.PostagemServices.findById(id)
         }
        @Get('/titulo/:titulo')
        @HttpCode(HttpStatus.OK)
            finByTitulo(
             @Param ('titulo')
            titulo:string
        ): Promise <Postagem[]> {
            return this.PostagemServices.findByTitulo(titulo)
        }

        @Post()
        @HttpCode(HttpStatus.CREATED)
        create (
            @Body()
            postagem: Postagem
        ): Promise <Postagem> {
            return this.PostagemServices.create(postagem);
        }

        @Put()
        @HttpCode(HttpStatus.OK)
        update (
            @Body()
            postagem: Postagem
        ): Promise <Postagem>{
            return this.PostagemServices.update(postagem);
        }

        @Delete ('/:id')
        @HttpCode(HttpStatus.NO_CONTENT)
        delete (
            @Param('id', ParseIntPipe)
            id: number
        ){
            return this.PostagemServices.delete(id);
        }
}