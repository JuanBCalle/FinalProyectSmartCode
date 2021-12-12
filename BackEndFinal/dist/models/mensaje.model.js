"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mensaje = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const empleado_model_1 = require("./empleado.model");
let Mensaje = class Mensaje extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Mensaje.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Mensaje.prototype, "body", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => empleado_model_1.Empleado),
    (0, tslib_1.__metadata)("design:type", String)
], Mensaje.prototype, "empleadoId", void 0);
Mensaje = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Mensaje);
exports.Mensaje = Mensaje;
//# sourceMappingURL=mensaje.model.js.map