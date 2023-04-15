import { PartialType } from "@nestjs/mapped-types";
import { CreatePaisesDto } from "./create-paises.dto";

export class UpdatePaisesDto extends PartialType(CreatePaisesDto) {}
