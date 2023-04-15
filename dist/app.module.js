"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const menu_module_1 = require("./menu/menu.module");
const typeorm_1 = require("@nestjs/typeorm");
const categories_module_1 = require("./categories/categories.module");
const category_entity_1 = require("./categories/entities/category.entity");
const marcas_module_1 = require("./marcas/marcas.module");
const marcas_entity_1 = require("./marcas/entitities/marcas.entity");
const paises_module_1 = require("./paises/paises.module");
const paises_entity_1 = require("./paises/entities/paises.entity");
const genero_module_1 = require("./genero/genero.module");
const gender_entity_1 = require("./genero/entities/gender.entity");
const user_module_1 = require("./user/user.module");
const profile_module_1 = require("./profile/profile.module");
const user_entity_1 = require("./user/entities/user.entity");
const profile_entity_1 = require("./profile/entities/profile.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: "postgres",
                host: "127.0.0.1",
                port: 5432,
                username: "postgres",
                password: "82030726",
                database: "hola",
                entities: [category_entity_1.Category, marcas_entity_1.Marcas, paises_entity_1.Paises, gender_entity_1.Genero, user_entity_1.User, profile_entity_1.Profile],
                synchronize: true,
                autoLoadEntities: true,
            }),
            menu_module_1.MenuModule,
            categories_module_1.CategoriesModule,
            marcas_module_1.MarcasModule,
            paises_module_1.PaisesModule,
            genero_module_1.GeneroModule,
            user_module_1.UserModule,
            profile_module_1.ProfileModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map