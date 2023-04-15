import { Repository } from "typeorm";
import { CreateGenderDto } from "./dto/create-gender.dto";
import { Genero } from "./entities/gender.entity";
export declare class GeneroService {
    private genderRepository;
    constructor(genderRepository: Repository<Genero>);
    create(genDto: CreateGenderDto): Promise<Genero>;
    findAll(): Promise<Genero[]>;
    findOne(id: string): Promise<Genero>;
    remove(id: string): Promise<string>;
    update(id: string, changeDto: CreateGenderDto): Promise<Genero>;
}
