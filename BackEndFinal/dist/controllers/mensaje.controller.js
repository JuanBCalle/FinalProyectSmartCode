"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensajeController = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const services_1 = require("../services");
let MensajeController = class MensajeController {
    constructor(mensajeRepository, notificaciones, empleado) {
        this.mensajeRepository = mensajeRepository;
        this.notificaciones = notificaciones;
        this.empleado = empleado;
    }
    async create(mensaje) {
        let empleadoEncontrado = this.empleado.findById(mensaje.empleadoId);
        if (empleadoEncontrado) {
            let telefono = (await empleadoEncontrado).Telefono;
            this.notificaciones.EnviarMensajePorSMS(mensaje.body, telefono);
            return this.mensajeRepository.create(mensaje);
        }
        return mensaje;
    }
    async count(where) {
        return this.mensajeRepository.count(where);
    }
    async find(filter) {
        return this.mensajeRepository.find(filter);
    }
    async updateAll(mensaje, where) {
        return this.mensajeRepository.updateAll(mensaje, where);
    }
    async findById(id, filter) {
        return this.mensajeRepository.findById(id, filter);
    }
    async updateById(id, mensaje) {
        await this.mensajeRepository.updateById(id, mensaje);
    }
    async replaceById(id, mensaje) {
        await this.mensajeRepository.replaceById(id, mensaje);
    }
    async deleteById(id) {
        await this.mensajeRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/mensajes'),
    (0, rest_1.response)(200, {
        description: 'Mensaje model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Mensaje) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Mensaje, {
                    title: 'NewMensaje',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MensajeController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/mensajes/count'),
    (0, rest_1.response)(200, {
        description: 'Mensaje model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Mensaje)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MensajeController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/mensajes'),
    (0, rest_1.response)(200, {
        description: 'Array of Mensaje model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Mensaje, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Mensaje)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MensajeController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/mensajes'),
    (0, rest_1.response)(200, {
        description: 'Mensaje PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Mensaje, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Mensaje)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Mensaje, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MensajeController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/mensajes/{id}'),
    (0, rest_1.response)(200, {
        description: 'Mensaje model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Mensaje, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Mensaje, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MensajeController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/mensajes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Mensaje PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Mensaje, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Mensaje]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MensajeController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/mensajes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Mensaje PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Mensaje]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MensajeController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/mensajes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Mensaje DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MensajeController.prototype, "deleteById", null);
MensajeController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.MensajeRepository)),
    (0, tslib_1.__param)(1, (0, core_1.service)(services_1.NotificacionesService)),
    (0, tslib_1.__param)(2, (0, repository_1.repository)(repositories_1.EmpleadoRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.MensajeRepository,
        services_1.NotificacionesService,
        repositories_1.EmpleadoRepository])
], MensajeController);
exports.MensajeController = MensajeController;
//# sourceMappingURL=mensaje.controller.js.map