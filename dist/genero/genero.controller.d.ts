import { CreateGenderDto } from "./dto/create-gender.dto";
import { GeneroService } from "./genero.service";
export declare class GeneroController {
    private readonly generoService;
    constructor(generoService: GeneroService);
    create(genderDto: CreateGenderDto): Promise<import("./entities/gender.entity").Genero>;
    findAll(): Promise<import("./entities/gender.entity").Genero[]>;
    findOne(id: string): Promise<import("./entities/gender.entity").Genero>;
    deleteOne(id: string): Promise<string>;
    updateProduct(id: string, changeDto: CreateGenderDto): Promise<import("./entities/gender.entity").Genero>;
}
