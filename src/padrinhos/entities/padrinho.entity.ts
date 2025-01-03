import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Padrinho {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    descricao: string;

    @Column({ nullable: true })
    base64Foto: string;
}
