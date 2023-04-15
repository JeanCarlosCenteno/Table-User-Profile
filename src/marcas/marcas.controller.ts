import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  ParseUUIDPipe,
} from "@nestjs/common";
import { CreateMarcasDto } from "./dto/create-marcas.dto";
import { UpdateMarcasDto } from "./dto/update-marcas.dto";
import { MarcasService } from "./marcas.service";

@Controller("marca")
export class MarcasController {
  constructor(private readonly marcasService: MarcasService) {}

  @Post()
  create(@Body() marcasDto: CreateMarcasDto) {
    return this.marcasService.create(marcasDto);
  }

  @Get()
  findAll() {
    return this.marcasService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseUUIDPipe) id: string) {
    return this.marcasService.findOne(id);
  }

  @Delete(":id")
  deleteOne(@Param("id", ParseUUIDPipe) id: string) {
    return this.marcasService.remove(id);
  }

  @Patch(":id")
  updateProduct(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() changeDto: CreateMarcasDto
  ) {
    //const updatedProduct = await this.shopServiceRepo.update(id, changeDto);
    return this.marcasService.update(id, changeDto);
  }
}
