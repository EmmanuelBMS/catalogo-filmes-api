import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuarioDto } from './usuarios.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Usuarios')
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}
  
  @Post()
  create(@Body() usuario: UsuarioDto) {
    return this.usuariosService.create(usuario);
  }
}
