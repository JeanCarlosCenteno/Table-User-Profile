"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGenderDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_gender_dto_1 = require("./create-gender.dto");
class UpdateGenderDto extends (0, mapped_types_1.PartialType)(create_gender_dto_1.CreateGenderDto) {
}
exports.UpdateGenderDto = UpdateGenderDto;
//# sourceMappingURL=update-gender.js.map