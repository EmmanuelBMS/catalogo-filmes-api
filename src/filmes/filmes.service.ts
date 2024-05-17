import { Injectable, NotFoundException } from '@nestjs/common';
import { FilmesDto } from './filmes.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FilmeEntity } from 'src/db/entities/filme.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FilmesService {

  constructor(
    @InjectRepository(FilmeEntity)
    private readonly filmeRepository: Repository<FilmeEntity>
  ) {}

  private retornoFilmeBanco(filmeEntity: FilmeEntity): FilmesDto {
    return {
      id: filmeEntity.id,
      titulo: filmeEntity.titulo,
      genero: filmeEntity.genero,
      sinopse: filmeEntity.sinopse,
      lancamento: filmeEntity.lancamento
    }
  }


  async create(filme: FilmesDto){
    const filmeCriacao: FilmeEntity = {
      titulo: filme.titulo,
      genero: filme.genero,
      sinopse: filme.sinopse,
      lancamento: filme.lancamento,
    }
    await this.filmeRepository.save(filmeCriacao)

    return this.retornoFilmeBanco(filmeCriacao)
  }

  async findAll() {
    const filmes = await this.filmeRepository.find();
    console.log(filmes);
    
    return filmes;
  }

  async findById(id: number): Promise<FilmesDto> {
    const filme = await this.filmeRepository.findOne({ where: { id } });
    
    if (!filme){
      throw new NotFoundException(`Nenhum filme com o número #${id} foi encontrado!`)
    }

    return this.retornoFilmeBanco(filme)
  }

  async update(filme: FilmesDto) {
    try {
      const {id, titulo, genero, sinopse, lancamento } = filme
      await this.filmeRepository.update({
        id,
      }, {
        titulo,
        genero,
        sinopse,
        lancamento
      })
      return await this.filmeRepository.findOne({ where: { id } })
    } catch {
      throw new NotFoundException(`Nenhum filme com o numero #${filme.id} foi encontrado!`)
    }
  } 

  async remove(id: number) {
  try {
    await this.filmeRepository.delete(id);

    return (`O filme #${id} foi excluído com sucesso!`)
  } catch {
    throw new NotFoundException(`Nenhum filme com o numero #${id} foi encontrado! `)
  }
  }  
}
