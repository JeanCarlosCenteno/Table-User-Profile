"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMarcasDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_marcas_dto_1 = require("./create-marcas.dto");
class UpdateMarcasDto extends (0, mapped_types_1.PartialType)(create_marcas_dto_1.CreateMarcasDto) {
}
exports.UpdateMarcasDto = UpdateMarcasDto;
//# sourceMappingURL=update-marcas.dto.js.map