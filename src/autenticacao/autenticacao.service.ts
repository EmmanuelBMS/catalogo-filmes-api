import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from '../usuarios/usuarios.service';
import { compareSync } from 'bcrypt';
import { AutenticacaoDto } from './autenticacao.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AutenticacaoService {
  private jwtTempoExpiracao: number;

  constructor(
    private readonly usuarioService: UsuariosService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {
    this.jwtTempoExpiracao = +this.configService.get<number>('JWT_EXPIRATION_TIME');
  }

  async login(usuario: string, senha: string): Promise<AutenticacaoDto> {
    const usuarioDB = await this.usuarioService.findByUserName(usuario)    
    
    if (!usuarioDB || !compareSync(senha, usuarioDB.senha)) {
      throw new UnauthorizedException();
    }

    const payload = { sub: usuarioDB.id, usuario: usuarioDB.usuario }; //sub propriedade recomendada de acordo com a documentação do JWT

    const token = this.jwtService.sign(payload);

    return { token, expiresIn: this.jwtTempoExpiracao }
  }
}
