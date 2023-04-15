import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import slugify from "slugify";
import { Repository } from "typeorm";
import { CreatePaisesDto } from "./dto/create-paises.dto";
import { Paises } from "./entities/paises.entity";

@Injectable()
export class PaisesService {
  constructor(
    @InjectRepository(Paises)
    private paisesRepository: Repository<Paises>
  ) {}

  async create(catDto: CreatePaisesDto) {
    const pais = this.paisesRepository.create(catDto);
    await this.paisesRepository.save(pais);

    return pais;
  }

  findAll() {
    return this.paisesRepository.find();
  }

  findOne(id: string) {
    return this.paisesRepository.findOneBy({ id });
  }

  async remove(id: string) {
    const pais = await this.findOne(id);
    await this.paisesRepository.remove(pais);
    return `Pais eliminado`;
  }

  async update(id: string, changeDto: CreatePaisesDto) {
    const findPaises = await this.findOne(id);
    const updatePaises = await this.paisesRepository.merge(
      findPaises,
      changeDto
    );

    return this.paisesRepository.save(updatePaises);
  }
}
