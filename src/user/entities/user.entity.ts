import { Profile } from "src/profile/entities/profile.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length:20})
  username: string;

  @Column() 
  password: string;

  @OneToOne(() => Profile, (profile) => profile.user) // specify inverse side as a second parameter
  @JoinColumn()
  profile: Profile
  
}
