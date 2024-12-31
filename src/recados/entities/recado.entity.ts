import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
const { nanoid } = require('nanoid');

@Entity('recados')
export class Recado {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    message: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @BeforeInsert()
    generateId() {
        this.id = nanoid();
        this.createdAt = new Date();
    }
}
