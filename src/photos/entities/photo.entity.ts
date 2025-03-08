import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("photos")
export class Photo {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    base64: string;
}
