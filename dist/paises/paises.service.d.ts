import { Repository } from "typeorm";
import { CreatePaisesDto } from "./dto/create-paises.dto";
import { Paises } from "./entities/paises.entity";
export declare class PaisesService {
    private paisesRepository;
    constructor(paisesRepository: Repository<Paises>);
    create(catDto: CreatePaisesDto): Promise<Paises>;
    findAll(): Promise<Paises[]>;
    findOne(id: string): Promise<Paises>;
    remove(id: string): Promise<string>;
    update(id: string, changeDto: CreatePaisesDto): Promise<Paises>;
}
