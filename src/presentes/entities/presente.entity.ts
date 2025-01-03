// Arquivo que representa a entidade de presente
// É responsável por definir a estrutura de dados que representa um presente
// Exemplo: id, nome, descrição, preço, etc.


import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
const { nanoid } = require('nanoid');

@Entity("presentes") // Define o nome da tabela no banco de dados
export class Presente {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    description: string;
    
    @Column({ nullable: true })
    image: string;

    // Método para gerar o ID do presente
    @BeforeInsert()
    generateId() {
        this.id = nanoid(); // Gera um ID único
    }
}
