import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Paises } from "./entities/paises.entity";
import { PaisesController } from "./paises.controller";
import { PaisesService } from "./paises.service";

@Module({
  imports: [TypeOrmModule.forFeature([Paises])],
  controllers: [PaisesController],
  providers: [PaisesService],
})
export class PaisesModule {}
