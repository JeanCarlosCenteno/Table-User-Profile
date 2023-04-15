import { User } from "src/user/entities/user.entity";
import { Column, Entity, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;

    @Column()
    direction: string;
    
    @Column({ default:true })
    isActive:boolean;
    
    @OneToOne(() => User, (user) => user.profile) // specify inverse side as a second parameter
    user: User
}
