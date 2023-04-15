import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from "@nestjs/common";
import { CreateGenderDto } from "./dto/create-gender.dto";
import { GeneroService } from "./genero.service";

@Controller("genero")
export class GeneroController {
  constructor(private readonly generoService: GeneroService) {}

  @Post()
  create(@Body() genderDto: CreateGenderDto) {
    return this.generoService.create(genderDto);
  }

  @Get()
  findAll() {
    return this.generoService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseUUIDPipe) id: string) {
    return this.generoService.findOne(id);
  }

  @Delete(":id")
  deleteOne(@Param("id", ParseUUIDPipe) id: string) {
    return this.generoService.remove(id);
  }

  @Patch(":id")
  updateProduct(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() changeDto: CreateGenderDto
  ) {
    //const updatedProduct = await this.shopServiceRepo.update(id, changeDto);
    return this.generoService.update(id, changeDto);
  }
}
