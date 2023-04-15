import { IsNotEmpty, IsOptional } from "class-validator";

export class CreatePaisesDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  region: string;
}
