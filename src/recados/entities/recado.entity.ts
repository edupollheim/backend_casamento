import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
const { nanoid } = require('nanoid');

@Entity('recados')
export class Recado {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    message: string;

    @CreateDateColumn({ type: 'datetime' })
    createdAt: Date;

    @BeforeInsert()
    generateId() {
        this.id = nanoid();
    }
}
