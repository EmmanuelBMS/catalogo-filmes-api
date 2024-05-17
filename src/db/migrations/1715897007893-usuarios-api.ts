import{
    MigrationInterface,
    QueryRunner,
} from "typeorm";

export class Usuarios1715891397354 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`)
        await queryRunner.query(`
        CREATE TABLE "usuario" (
            id uuid NOT NULL DEFAULT uuid_generate_v4(),
            usuario varchar(60) NOT NULL,
            senha_hash varchar(256) NOT NULL,
            CONSTRAINT usuario_pk_id PRIMARY KEY (id),
            CONSTRAINT usuario_un_usuario UNIQUE (usuario)
        )
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS usuario;`)
    }

}
