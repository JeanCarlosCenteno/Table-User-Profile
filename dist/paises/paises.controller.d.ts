import { CreatePaisesDto } from "./dto/create-paises.dto";
import { PaisesService } from "./paises.service";
export declare class PaisesController {
    private readonly paisesService;
    constructor(paisesService: PaisesService);
    create(paisesDto: CreatePaisesDto): Promise<import("./entities/paises.entity").Paises>;
    findAll(): Promise<import("./entities/paises.entity").Paises[]>;
    findOne(id: string): Promise<import("./entities/paises.entity").Paises>;
    deleteOne(id: string): Promise<string>;
    updateProduct(id: string, changeDto: CreatePaisesDto): Promise<import("./entities/paises.entity").Paises>;
}
