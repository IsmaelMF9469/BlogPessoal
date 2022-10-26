"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutModule = void 0;
const decorators_1 = require("@nestjs/common/decorators");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const usuario_module_1 = require("../usuario/usuario.module");
const bcrypt_1 = require("./bcrypt/bcrypt");
const constants_1 = require("./constants/constants");
const auth_controller_1 = require("./controllers/auth.controller");
const auth_service_1 = require("./services/auth.service");
const jwt_strategy_1 = require("./strategy/jwt.strategy");
const local_strategy_1 = require("./strategy/local.strategy");
let AutModule = class AutModule {
};
AutModule = __decorate([
    (0, decorators_1.Module)({
        imports: [
            usuario_module_1.UsuarioModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '24h' }
            })
        ],
        providers: [bcrypt_1.Bcrypt, auth_service_1.AuthService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
        controllers: [auth_controller_1.AuthController],
        exports: [bcrypt_1.Bcrypt]
    })
], AutModule);
exports.AutModule = AutModule;
//# sourceMappingURL=auth.module.js.map