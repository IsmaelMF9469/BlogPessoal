import { Body, Controller, Get, HttpCode, HttpStatus, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger/dist";
import { JwtAuthGuard } from "../../auth/guard/jwt.auth.guard";
import { Usuario } from "../entities/usuario.entity";
import { UsuarioService } from "../services/usuario.services";

@Controller('/usuarios')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    @UseGuards(JwtAuthGuard)
    @ApiTags('Usuario')
    @Get('/all')
    @ApiBearerAuth()
    @HttpCode(HttpStatus.OK)
    findAll (): Promise <Usuario[]> {
        return this.usuarioService.findAll();
    }

    @HttpCode(HttpStatus.CREATED)
    @ApiTags('Usuario')
    @Post('/cadastrar')
    async create(@Body() usuario: Usuario): Promise <Usuario> {
        return await this.usuarioService.create(usuario);
    }

    
    @UseGuards(JwtAuthGuard)
    @ApiTags('Usuario')
    @Put('/atualizar')
    @ApiBearerAuth()
    @HttpCode(HttpStatus.OK)
    async update(@Body() usuario: Usuario): Promise <Usuario> {
        return this.usuarioService.update(usuario);
    }

}