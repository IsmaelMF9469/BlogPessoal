"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tema_controller_1 = require("./controllers/tema.controller");
const tema_services_1 = require("./services/tema.services");
const tema_entity_1 = require("./entities/tema.entity");
let TemaModule = class TemaModule {
};
TemaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tema_entity_1.Tema])],
        providers: [tema_services_1.TemaService],
        controllers: [tema_controller_1.TemaController],
        exports: [typeorm_1.TypeOrmModule]
    })
], TemaModule);
exports.TemaModule = TemaModule;
//# sourceMappingURL=tema.module.js.map