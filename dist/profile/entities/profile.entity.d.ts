import { User } from "src/user/entities/user.entity";
export declare class Profile {
    id: number;
    name: string;
    direction: string;
    isActive: boolean;
    user: User;
}
