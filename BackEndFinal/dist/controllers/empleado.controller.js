"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadoController = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const services_1 = require("../services");
let EmpleadoController = class EmpleadoController {
    constructor(empleadoRepository, notificaciones, autenticacion) {
        this.empleadoRepository = empleadoRepository;
        this.notificaciones = notificaciones;
        this.autenticacion = autenticacion;
    }
    async create(empleado) {
        let clave = this.autenticacion.GenerarClave();
        let claveCifrada = this.autenticacion.CifrarClave(clave);
        empleado.clave = claveCifrada;
        let em = await this.empleadoRepository.create(empleado);
        let mesj = `${em.Nombres} su clave fue generada, su clave es: ${clave}`;
        this.notificaciones.EnviarMensajePorSMS(mesj, em.Telefono);
        return em;
    }
    async identificarEmpleado(credenciales) {
        let p = await this.autenticacion.IdentificarEmpleado(credenciales.usuario, credenciales.clave);
        if (p) {
            let token = this.autenticacion.GenerarTokenJWT(p);
            return {
                data: {
                    id: p.Id,
                    nombre: p.Nombres
                }, tk: token
            };
        }
        else {
            throw new rest_1.HttpErrors[401]("Datos Inválidos");
        }
    }
    async count(where) {
        return this.empleadoRepository.count(where);
    }
    async find(filter) {
        return this.empleadoRepository.find(filter);
    }
    async updateAll(empleado, where) {
        return this.empleadoRepository.updateAll(empleado, where);
    }
    async findById(id, filter) {
        return this.empleadoRepository.findById(id, filter);
    }
    async updateById(id, empleado) {
        await this.empleadoRepository.updateById(id, empleado);
    }
    async replaceById(id, empleado) {
        await this.empleadoRepository.replaceById(id, empleado);
    }
    async deleteById(id) {
        await this.empleadoRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/empleados'),
    (0, rest_1.response)(200, {
        description: 'Empleado model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Empleado) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Empleado, {
                    title: 'NewEmpleado',
                    exclude: ['Id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpleadoController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/IdentificarEmpleado'),
    (0, rest_1.response)(200, {
        description: 'Identificación Empleado'
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Credenciales]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpleadoController.prototype, "identificarEmpleado", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/empleados/count'),
    (0, rest_1.response)(200, {
        description: 'Empleado model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Empleado)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpleadoController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/empleados'),
    (0, rest_1.response)(200, {
        description: 'Array of Empleado model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Empleado, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Empleado)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpleadoController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/empleados'),
    (0, rest_1.response)(200, {
        description: 'Empleado PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Empleado, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Empleado)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Empleado, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpleadoController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/empleados/{id}'),
    (0, rest_1.response)(200, {
        description: 'Empleado model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Empleado, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Empleado, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpleadoController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/empleados/{id}'),
    (0, rest_1.response)(204, {
        description: 'Empleado PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Empleado, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Empleado]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpleadoController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/empleados/{id}'),
    (0, rest_1.response)(204, {
        description: 'Empleado PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Empleado]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpleadoController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/empleados/{id}'),
    (0, rest_1.response)(204, {
        description: 'Empleado DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], EmpleadoController.prototype, "deleteById", null);
EmpleadoController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.EmpleadoRepository)),
    (0, tslib_1.__param)(1, (0, core_1.service)(services_1.NotificacionesService)),
    (0, tslib_1.__param)(2, (0, core_1.service)(services_1.AutenticacionService)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.EmpleadoRepository,
        services_1.NotificacionesService,
        services_1.AutenticacionService])
], EmpleadoController);
exports.EmpleadoController = EmpleadoController;
//# sourceMappingURL=empleado.controller.js.map