import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateGenderDto } from "./dto/create-gender.dto";
import { Genero } from "./entities/gender.entity";

@Injectable()
export class GeneroService {
  constructor(
    @InjectRepository(Genero)
    private genderRepository: Repository<Genero>
  ) {}

  async create(genDto: CreateGenderDto) {
    const gender = this.genderRepository.create(genDto);
    await this.genderRepository.save(gender);

    return gender;
  }

  findAll() {
    return this.genderRepository.find();
  }

  findOne(id: string) {
    return this.genderRepository.findOneBy({ id });
  }

  async remove(id: string) {
    const gender = await this.findOne(id);
    await this.genderRepository.remove(gender);
    return `Genero eliminado`;
  }

  async update(id: string, changeDto: CreateGenderDto) {
    const findGender = await this.findOne(id);
    const updateProduct = await this.genderRepository.merge(
      findGender,
      changeDto
    );

    return this.genderRepository.save(updateProduct);
  }
}
