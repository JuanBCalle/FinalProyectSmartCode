"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProveedorController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProveedorController = class ProveedorController {
    constructor(proveedorRepository) {
        this.proveedorRepository = proveedorRepository;
    }
    async create(proveedor) {
        return this.proveedorRepository.create(proveedor);
    }
    async count(where) {
        return this.proveedorRepository.count(where);
    }
    async find(filter) {
        return this.proveedorRepository.find(filter);
    }
    async updateAll(proveedor, where) {
        return this.proveedorRepository.updateAll(proveedor, where);
    }
    async findById(id, filter) {
        return this.proveedorRepository.findById(id, filter);
    }
    async updateById(id, proveedor) {
        await this.proveedorRepository.updateById(id, proveedor);
    }
    async replaceById(id, proveedor) {
        await this.proveedorRepository.replaceById(id, proveedor);
    }
    async deleteById(id) {
        await this.proveedorRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/proveedors'),
    (0, rest_1.response)(200, {
        description: 'Proveedor model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Proveedor) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Proveedor, {
                    title: 'NewProveedor',
                    exclude: ['Id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProveedorController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/proveedors/count'),
    (0, rest_1.response)(200, {
        description: 'Proveedor model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Proveedor)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProveedorController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/proveedors'),
    (0, rest_1.response)(200, {
        description: 'Array of Proveedor model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Proveedor, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Proveedor)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProveedorController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/proveedors'),
    (0, rest_1.response)(200, {
        description: 'Proveedor PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Proveedor, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Proveedor)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Proveedor, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProveedorController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/proveedors/{id}'),
    (0, rest_1.response)(200, {
        description: 'Proveedor model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Proveedor, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Proveedor, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProveedorController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/proveedors/{id}'),
    (0, rest_1.response)(204, {
        description: 'Proveedor PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Proveedor, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Proveedor]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProveedorController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/proveedors/{id}'),
    (0, rest_1.response)(204, {
        description: 'Proveedor PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Proveedor]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProveedorController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/proveedors/{id}'),
    (0, rest_1.response)(204, {
        description: 'Proveedor DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProveedorController.prototype, "deleteById", null);
ProveedorController = (0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)("admin"),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.ProveedorRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.ProveedorRepository])
], ProveedorController);
exports.ProveedorController = ProveedorController;
//# sourceMappingURL=proveedor.controller.js.map