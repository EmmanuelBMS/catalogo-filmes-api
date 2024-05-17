import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "usuario" })
export class UsuarioEntity {

  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({ type: 'varchar' })
  usuario: string;

  @Column({ type: 'varchar', name: 'senha_hash'})
  senhaHash: string;
}