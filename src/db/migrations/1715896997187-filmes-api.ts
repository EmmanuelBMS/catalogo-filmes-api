import {
    MigrationInterface,
    QueryRunner,
} from "typeorm";

export class Filmes1715891384135 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE IF NOT EXISTS filme (
            id serial NOT NULL,
            titulo varchar(60) NOT NULL,
            genero varchar(60) NOT NULL,
            sinopse varchar(256) NOT NULL,
            lancamento varchar(4) NOT NULL,
            CONSTRAINT filme_id PRIMARY KEY (id)
        )
        `
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS filme;`)
    }

}
