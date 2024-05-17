import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from 'src/db/entities/usuario.entity';

@Module({
  controllers: [UsuariosController],
  imports: [TypeOrmModule.forFeature([UsuarioEntity])],
  exports: [UsuariosService],
  providers: [UsuariosService]
})
export class UsuariosModule {}
