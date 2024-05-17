import { ConflictException, Injectable } from '@nestjs/common';
import { UsuarioDto } from './usuarios.dto';
import { v4 as uuid } from 'uuid';
import { hashSync } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from 'src/db/entities/usuario.entity';
import { Repository } from 'typeorm';
import { setRedis } from 'src/redis.config';

@Injectable()
export class UsuariosService {

  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuariosRepository: Repository<UsuarioEntity>
  ) {}

  async create(novoUsuario: UsuarioDto) {
    const usuarioJaExiste = await this.findByUserName(novoUsuario.usuario);
    
    if (usuarioJaExiste) {
      throw new ConflictException(`Usuario '${novoUsuario.usuario}' já existe`);
    }

    const usuarioDb = new UsuarioEntity();
    usuarioDb.usuario = novoUsuario.usuario;
    usuarioDb.senhaHash = hashSync(novoUsuario.senha, 10);
    const { id, usuario } = await this.usuariosRepository.save(usuarioDb)

    return { id, usuario }
  }

  async findByUserName(usuario: string): Promise<UsuarioDto | null> {
    const usuarioEncontrado = await this.usuariosRepository.findOne({
      where: { usuario }
    })
    if (!usuarioEncontrado) {
      return null;
    }
  
    return {
      id: usuarioEncontrado.id,
      usuario: usuarioEncontrado.usuario,
      senha: usuarioEncontrado.senhaHash
    }
  }
}
