import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "marcas" })
export class Marcas {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;
}
