import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateGenderDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  gender: string;
}
