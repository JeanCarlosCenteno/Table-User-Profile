import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "paises" })
export class Paises {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  region: string;
}
