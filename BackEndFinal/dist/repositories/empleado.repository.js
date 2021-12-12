"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadoRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let EmpleadoRepository = class EmpleadoRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, empresaRepositoryGetter, mensajeRepositoryGetter) {
        super(models_1.Empleado, dataSource);
        this.empresaRepositoryGetter = empresaRepositoryGetter;
        this.mensajeRepositoryGetter = mensajeRepositoryGetter;
        this.mensajes = this.createHasManyRepositoryFactoryFor('mensajes', mensajeRepositoryGetter);
        this.registerInclusionResolver('mensajes', this.mensajes.inclusionResolver);
        this.mensajes = this.createHasManyRepositoryFactoryFor('mensajes', mensajeRepositoryGetter);
        this.registerInclusionResolver('mensajes', this.mensajes.inclusionResolver);
        this.empresa = this.createBelongsToAccessorFor('empresa', empresaRepositoryGetter);
        this.registerInclusionResolver('empresa', this.empresa.inclusionResolver);
    }
};
EmpleadoRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.mongoDB')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('EmpresaRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('MensajeRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MongoDbDataSource, Function, Function])
], EmpleadoRepository);
exports.EmpleadoRepository = EmpleadoRepository;
//# sourceMappingURL=empleado.repository.js.map