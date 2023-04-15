import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateMarcasDto {
  @IsOptional()
  name: string;
}
