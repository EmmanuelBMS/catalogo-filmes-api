import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "filme" })
export class FilmeEntity {

  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column({ type: 'varchar' })
  titulo: string;

  @Column({ type: 'varchar' })
  genero: string;

  @Column({ type: 'varchar' })
  sinopse: string;

  @Column({ type: 'varchar' })
  lancamento: string;
}