import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "genero" })
export class Genero {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  gender: string;
}
