import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Marcas } from "./entitities/marcas.entity";
import { MarcasController } from "./marcas.controller";
import { MarcasService } from "./marcas.service";

@Module({
  imports: [TypeOrmModule.forFeature([Marcas])],
  controllers: [MarcasController],
  providers: [MarcasService],
})
export class MarcasModule {}
