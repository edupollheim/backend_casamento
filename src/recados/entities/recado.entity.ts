import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
const { nanoid } = require('nanoid');

@Entity('recados')
export class Recado {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @BeforeInsert()
    generateId() {
        this.id = nanoid();
    }
}
