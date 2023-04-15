"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePaisesDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_paises_dto_1 = require("./create-paises.dto");
class UpdatePaisesDto extends (0, mapped_types_1.PartialType)(create_paises_dto_1.CreatePaisesDto) {
}
exports.UpdatePaisesDto = UpdatePaisesDto;
//# sourceMappingURL=update-paises.dto.js.map