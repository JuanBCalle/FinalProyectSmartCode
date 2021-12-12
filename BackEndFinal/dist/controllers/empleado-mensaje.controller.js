"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadoMensajeController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EmpleadoMensajeController = class EmpleadoMensajeController {
    constructor(empleadoRepository) {
        this.empleadoRepository = empleadoRepository;
    }
    async find(id, filter) {
        return this.empleadoRepository.mensajes(id).find(filter);
    }
    async create(id, mensaje) {
        return this.empleadoRepository.mensajes(id).create(mensaje);
    }
    async patch(id, mensaje, where) {
        return this.empleadoRepository.mensajes(id).patch(mensaje, where);
    }
    async delete(id, where) {
        return this.empleadoRepository.mensajes(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/empleados/{id}/mensajes', {
        responses: {
            '200': {
                description: 'Array of Empleado has many Mensaje',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Mensaje) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('filter')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpleadoMensajeController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/empleados/{id}/mensajes', {
        responses: {
            '200': {
                description: 'Empleado model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Mensaje) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Mensaje, {
                    title: 'NewMensajeInEmpleado',
                    exclude: ['id'],
                    optional: ['empleadoId']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpleadoMensajeController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/empleados/{id}/mensajes', {
        responses: {
            '200': {
                description: 'Empleado.Mensaje PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Mensaje, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Mensaje))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpleadoMensajeController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/empleados/{id}/mensajes', {
        responses: {
            '200': {
                description: 'Empleado.Mensaje DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Mensaje))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpleadoMensajeController.prototype, "delete", null);
EmpleadoMensajeController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.EmpleadoRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.EmpleadoRepository])
], EmpleadoMensajeController);
exports.EmpleadoMensajeController = EmpleadoMensajeController;
//# sourceMappingURL=empleado-mensaje.controller.js.map