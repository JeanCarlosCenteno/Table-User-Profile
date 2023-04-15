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
exports.PaisesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const paises_entity_1 = require("./entities/paises.entity");
let PaisesService = class PaisesService {
    constructor(paisesRepository) {
        this.paisesRepository = paisesRepository;
    }
    async create(catDto) {
        const pais = this.paisesRepository.create(catDto);
        await this.paisesRepository.save(pais);
        return pais;
    }
    findAll() {
        return this.paisesRepository.find();
    }
    findOne(id) {
        return this.paisesRepository.findOneBy({ id });
    }
    async remove(id) {
        const pais = await this.findOne(id);
        await this.paisesRepository.remove(pais);
        return `Pais eliminado`;
    }
    async update(id, changeDto) {
        const findPaises = await this.findOne(id);
        const updatePaises = await this.paisesRepository.merge(findPaises, changeDto);
        return this.paisesRepository.save(updatePaises);
    }
};
PaisesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(paises_entity_1.Paises)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PaisesService);
exports.PaisesService = PaisesService;
//# sourceMappingURL=paises.service.js.map