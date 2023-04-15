import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

import { CreateProfileDto } from 'src/profile/dto/create-profile.dto';
import { Profile } from 'src/profile/entities/profile.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
  ) {}
  async create(body :any) {
    const profile = new Profile();
    profile.name = body.name;
    profile.direction = body.direction;
    profile.direction = body.isActive;

    const newProfile = await this.profileRepository.save(profile)

    const user = new User();
    user.username = body.username;
    user.password = body.password;
    user.profile = newProfile;
    return this.userRepository.save(user)
  }




  findAll() {
    return this.userRepository.find({ relations: {
      profile: true,
  },});
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id });
  }

  update(id: number, _UpdateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    
    
    return `This action removes a #${id} profile`;
  }


  
  async createProfile(id:number,profile: CreateProfileDto) {
    const userFound  = await this.userRepository.findOne({
      where:{
        id,
      }
    });
    if (!userFound) {
      return new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND)
    }

    const newProfile = this.profileRepository.create(profile)
    const savedProfile = await this.profileRepository.save(newProfile)

    userFound.profile = savedProfile
    return this.userRepository.save(userFound)

  }
}