import { IsOptional, IsString, IsUUID, Matches, MaxLength, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UsuarioDto {
  @ApiProperty({
    description: 'o id é um dado essencial é do tipo string sendo um uuid gerado automaticamente',
    example: 'd4144af2-a374-4119-ab4b-3a99fa3875d0'
  })
  @IsUUID()
  @IsOptional()
  id: string;

  @ApiProperty({
    description: 'o usuario é um dado essencial é do tipo string sendo obrigarório fornecer, minímo de 3 caracteres, máximo de 48 caracteres',
    example: 'Rei Arthur'
  })
  @IsString()
  @MinLength(3)
  @MaxLength(48)
  usuario: string;

  @ApiProperty({
    description: 'a senha é um dado essencial é do tipo string sendo obrigarório fornecer, minímo de 3 caracteres, máximo de 20 caracteres e precisa ser uma senha forte, com letras maiúsculas, minúsculas, números e caracteres especiais',
    example: 'ReiArthur2024#@!'
  })
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'Senha muito fraca'})
  senha: string;
}