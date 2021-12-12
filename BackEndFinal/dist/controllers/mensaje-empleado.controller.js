"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensajeEmpleadoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let MensajeEmpleadoController = class MensajeEmpleadoController {
    constructor(mensajeRepository) {
        this.mensajeRepository = mensajeRepository;
    }
    async getEmpleado(id) {
        return this.mensajeRepository.empleado(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/mensajes/{id}/empleado', {
        responses: {
            '200': {
                description: 'Empleado belonging to Mensaje',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Empleado) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], MensajeEmpleadoController.prototype, "getEmpleado", null);
MensajeEmpleadoController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.MensajeRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.MensajeRepository])
], MensajeEmpleadoController);
exports.MensajeEmpleadoController = MensajeEmpleadoController;
//# sourceMappingURL=mensaje-empleado.controller.js.map