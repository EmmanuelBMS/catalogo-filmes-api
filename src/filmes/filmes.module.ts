import { Module } from '@nestjs/common';
import { FilmesController } from './filmes.controller';
import { FilmesService } from './filmes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmeEntity } from 'src/db/entities/filme.entity';

@Module({
  controllers: [FilmesController],
  imports: [TypeOrmModule.forFeature([FilmeEntity])],
  providers: [FilmesService]
})
export class FilmesModule {}
