import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { Category } from "./entities/category.entity";

import slugify from "slugify";

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
  ) {}

  //Metodo para la creacion de una  nueva categoria
  async create(catDto: CreateCategoryDto) {
    const category = this.categoryRepository.create(catDto);
    await this.categoryRepository.save(category);

    return category;
  }

  findAll() {
    return this.categoryRepository.find();
  }

  findOne(id: string) {
    return this.categoryRepository.findOneBy({ id });
  }

  async remove(id: string) {
    const categories = await this.findOne(id);
    await this.categoryRepository.remove(categories);
    return `categoria eliminada`;
  }

  async update(id: string, changeDto: CreateCategoryDto) {
    const findCategories = await this.findOne(id);
    const updateProduct = await this.categoryRepository.merge(
      findCategories,
      changeDto
    );

    return this.categoryRepository.save(updateProduct);
  }
}
