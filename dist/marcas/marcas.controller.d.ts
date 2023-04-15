import { CreateMarcasDto } from "./dto/create-marcas.dto";
import { MarcasService } from "./marcas.service";
export declare class MarcasController {
    private readonly marcasService;
    constructor(marcasService: MarcasService);
    create(marcasDto: CreateMarcasDto): Promise<import("./entitities/marcas.entity").Marcas>;
    findAll(): Promise<import("./entitities/marcas.entity").Marcas[]>;
    findOne(id: string): Promise<import("./entitities/marcas.entity").Marcas>;
    deleteOne(id: string): Promise<string>;
    updateProduct(id: string, changeDto: CreateMarcasDto): Promise<import("./entitities/marcas.entity").Marcas>;
}
