import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { FilmesDto } from './filmes.dto';
import { FilmesService } from './filmes.service';
import { AutenticacaoGuard } from 'src/autenticacao/autenticacao.guard';
import { FindOptionsWhere } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(AutenticacaoGuard)
@ApiTags('Filmes')
@Controller('filmes')
export class FilmesController {

  constructor(private readonly filmesService: FilmesService) {

  } 
  
  @Post()
  async create(@Body() filmes: FilmesDto): Promise<FilmesDto>{
    return await this.filmesService.create(filmes);
  }

  @Get()
  async findAll(): Promise<FilmesDto[]> {
    return await this.filmesService.findAll();
  }

  @Get('/:id')
  async findById(@Param('id') id: number): Promise<FilmesDto> {
    return await this.filmesService.findById(+id);
  }

  @Put()
  async update(@Body() filme: FilmesDto): Promise<FilmesDto> {
    return await this.filmesService.update(filme)
  }

  @Delete('/:id')
  async remove(@Param ('id') id: string) {
    return await this.filmesService.remove(+id);
  }
}
