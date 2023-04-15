import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import slugify from "slugify";
import { Repository } from "typeorm";
import { CreateMarcasDto } from "./dto/create-marcas.dto";
import { UpdateMarcasDto } from "./dto/update-marcas.dto";
import { Marcas } from "./entitities/marcas.entity";

@Injectable()
export class MarcasService {
  constructor(
    @InjectRepository(Marcas)
    private marcasRepository: Repository<Marcas>
  ) {}

  async create(genderDto: CreateMarcasDto) {
    const marcas = this.marcasRepository.create(genderDto);
    await this.marcasRepository.save(marcas);

    return marcas;
  }

  findAll() {
    return this.marcasRepository.find();
  }

  findOne(id: string) {
    return this.marcasRepository.findOneBy({ id });
  }

  async remove(id: string) {
    const marcas = await this.findOne(id);
    await this.marcasRepository.remove(marcas);
    return `marca eliminado`;
  }

  async update(id: string, changeDto: CreateMarcasDto) {
    const findMarcas = await this.findOne(id);
    const updateMarcas = await this.marcasRepository.merge(
      findMarcas,
      changeDto
    );

    return this.marcasRepository.save(updateMarcas);
  }
}
