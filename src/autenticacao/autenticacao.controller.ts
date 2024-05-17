import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AutenticacaoService } from './autenticacao.service';
import { AutenticacaoDto } from './autenticacao.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Autenticacao')
@Controller('autenticacao')
export class AutenticacaoController {
  
  constructor(private readonly autenticacaoService: AutenticacaoService) {}

  @HttpCode(HttpStatus.OK)
  @Post('entrar')
  async login(
    @Body('usuario') usuario: string,
    @Body('senha') senha: string
  ): Promise<AutenticacaoDto> {    
    return await this.autenticacaoService.login(usuario, senha)
  }
}
