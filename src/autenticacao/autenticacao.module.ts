import { Module } from '@nestjs/common';
import { AutenticacaoService } from './autenticacao.service';
import { AutenticacaoController } from './autenticacao.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  imports: [JwtModule.registerAsync({
    global: true,
    imports: [],
    useFactory: async (configService: ConfigService) => ({
      secret: configService.get<string>('JWT_SECRET'),
      signOptions: { expiresIn: +configService.get<string>('JWT_EXPIRATION_TIME') }
    }),
    inject: [ConfigService]
  }), UsuariosModule],
  controllers: [AutenticacaoController],
  providers: [AutenticacaoService]
})
export class AutenticacaoModule {}
