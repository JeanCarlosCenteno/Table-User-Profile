import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class ProfileController {
    private readonly profilesService;
    constructor(profilesService: ProfileService);
    create(createProfileDto: CreateProfileDto): string;
    findAll(): Promise<import("./entities/profile.entity").Profile[]>;
    findOne(id: string): string;
    update(id: string, updateProfileDto: UpdateProfileDto): string;
    remove(id: string): string;
}
