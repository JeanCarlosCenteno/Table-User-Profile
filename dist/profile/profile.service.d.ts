import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';
export declare class ProfileService {
    private profileRepository;
    constructor(profileRepository: Repository<Profile>);
    create(createProfileDto: CreateProfileDto): string;
    findAll(): Promise<Profile[]>;
    findOne(id: number): string;
    update(id: number, updateProfileDto: UpdateProfileDto): string;
    remove(id: number): string;
}
