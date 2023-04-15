import { Repository } from "typeorm";
import { CreateMarcasDto } from "./dto/create-marcas.dto";
import { Marcas } from "./entitities/marcas.entity";
export declare class MarcasService {
    private marcasRepository;
    constructor(marcasRepository: Repository<Marcas>);
    create(genderDto: CreateMarcasDto): Promise<Marcas>;
    findAll(): Promise<Marcas[]>;
    findOne(id: string): Promise<Marcas>;
    remove(id: string): Promise<string>;
    update(id: string, changeDto: CreateMarcasDto): Promise<Marcas>;
}
