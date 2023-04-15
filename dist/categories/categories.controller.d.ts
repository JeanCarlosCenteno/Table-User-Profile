import { CategoriesService } from "./categories.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(categoriesDto: CreateCategoryDto): Promise<import("./entities/category.entity").Category>;
    findAll(): Promise<import("./entities/category.entity").Category[]>;
    findOne(id: string): Promise<import("./entities/category.entity").Category>;
    deleteOne(id: string): Promise<string>;
    updateProduct(id: string, changeDto: CreateCategoryDto): Promise<import("./entities/category.entity").Category>;
}
