"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const empresa_model_1 = require("./empresa.model");
const mensaje_model_1 = require("./mensaje.model");
let Empleado = class Empleado extends repository_1.Entity {
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
], Empleado.prototype, "Id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Empleado.prototype, "Nombres", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Empleado.prototype, "Apellidos", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Empleado.prototype, "Telefono", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Empleado.prototype, "Direccion", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Empleado.prototype, "Email", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Empleado.prototype, "Edad", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Empleado.prototype, "FechaNacimiento", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Empleado.prototype, "Sueldo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Empleado.prototype, "clave", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: false,
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Empleado.prototype, "EsDirectivo", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: false,
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Empleado.prototype, "EsCliente", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => empresa_model_1.Empresa),
    (0, tslib_1.__metadata)("design:type", String)
], Empleado.prototype, "empresaId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => mensaje_model_1.Mensaje),
    (0, tslib_1.__metadata)("design:type", Array)
], Empleado.prototype, "mensajes", void 0);
Empleado = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Empleado);
exports.Empleado = Empleado;
//# sourceMappingURL=empleado.model.js.map