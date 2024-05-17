import { ApiProperty } from "@nestjs/swagger";

export class AutenticacaoDto {
  @ApiProperty({
    description: 'token gerado após realização do login do usuario, é retornado em um JSON',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0YTgzNTJhNi0zMTRhLTQ5ZDItODU2NS1kZGRiMjcxYTU0MzkiLCJ1c3VhcmlvIjoiUmVpIEFydGh1ciIsImlhdCI6MTcxNTkwNDk4MCwiZXhwIjoxNzE1OTA4NTgwfQ.tLCl_JnjyYHZ7116cHcfyCo_mIjtieuIADpQ7zeTRhI'
  })
  token: string;

  @ApiProperty({
    description: 'Token tem uma duração padrão de 1 hora (3600 segundos), definido pelo sistema',
    example: 3600
  })
  expiresIn: number;
}