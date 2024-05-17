import { IsNumber, IsNumberString, IsOptional, IsString, MaxLength, MinLength, } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class FilmesDto {
  @ApiProperty({
    description: 'O id é gerado automaticamente pelo banco de dados sendo um inteiro, é opcional em algumas rotas',
    example: 2
  })
  @IsNumber()
  @IsOptional()
  id?: number;

  @ApiProperty({
    description: 'o titulo é um dado essencial é do tipo string e é obrigatório, minimo 3 caracteres e maximo 60 caracteres',
    example: 'As tranças do rei careca'
  })
  @IsString()
  @MinLength(3)
  @MaxLength(60)
  titulo: string;

  @ApiProperty({
    description: 'o genero é um dado essencial é do tipo string e é obrigatório, minimo 3 caracteres e maximo 60 caracteres',
    example: 'Comédia'
  })
  @IsString()
  @MinLength(3)
  @MaxLength(60)
  genero: string;

  @ApiProperty(
    {
      description: 'a sinopse é um dado essencial é do tipo string e é obrigatório, minimo 3 caracteres e maximo 256 caracteres',
      example: 'Filme muito engraçado estrelado por Jim Carrey'
    }
  )
  @IsString()
  @MinLength(3)
  @MaxLength(256)
  sinopse: string;

  @ApiProperty(
    {
      description: 'o lancamento é do tipo string e é obrigatório, minimo 3 caracteres e maximo 4 caracteres',
      example: '1997'
    }
  )
  @IsNumberString()
  @MinLength(3)
  @MaxLength(4)
  lancamento: string;
}