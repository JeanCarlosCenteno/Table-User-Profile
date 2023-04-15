"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarcasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const marcas_entity_1 = require("./entitities/marcas.entity");
let MarcasService = class MarcasService {
    constructor(marcasRepository) {
        this.marcasRepository = marcasRepository;
    }
    async create(genderDto) {
        const marcas = this.marcasRepository.create(genderDto);
        await this.marcasRepository.save(marcas);
        return marcas;
    }
    findAll() {
        return this.marcasRepository.find();
    }
    findOne(id) {
        return this.marcasRepository.findOneBy({ id });
    }
    async remove(id) {
        const marcas = await this.findOne(id);
        await this.marcasRepository.remove(marcas);
        return `marca eliminado`;
    }
    async update(id, changeDto) {
        const findMarcas = await this.findOne(id);
        const updateMarcas = await this.marcasRepository.merge(findMarcas, changeDto);
        return this.marcasRepository.save(updateMarcas);
    }
};
MarcasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(marcas_entity_1.Marcas)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MarcasService);
exports.MarcasService = MarcasService;
//# sourceMappingURL=marcas.service.js.map