import { PartialType } from "@nestjs/mapped-types";
import { CreateMarcasDto } from "./create-marcas.dto";

export class UpdateMarcasDto extends PartialType(CreateMarcasDto) {}
