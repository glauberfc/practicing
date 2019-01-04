import {MigrationInterface, QueryRunner} from "typeorm";

export class listingUser1546635568794 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "listings" ADD "ownerId" uuid NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "listings" DROP COLUMN "ownerId"`);
    }

}
