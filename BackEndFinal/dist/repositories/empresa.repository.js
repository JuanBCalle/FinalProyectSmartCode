"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let EmpresaRepository = class EmpresaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, empleadoRepositoryGetter, proveedorRepositoryGetter) {
        super(models_1.Empresa, dataSource);
        this.empleadoRepositoryGetter = empleadoRepositoryGetter;
        this.proveedorRepositoryGetter = proveedorRepositoryGetter;
        this.proveedors = this.createHasManyRepositoryFactoryFor('proveedors', proveedorRepositoryGetter);
        this.registerInclusionResolver('proveedors', this.proveedors.inclusionResolver);
        this.empleados = this.createHasManyRepositoryFactoryFor('empleados', empleadoRepositoryGetter);
        this.registerInclusionResolver('empleados', this.empleados.inclusionResolver);
    }
};
EmpresaRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.mongoDB')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('EmpleadoRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('ProveedorRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MongoDbDataSource, Function, Function])
], EmpresaRepository);
exports.EmpresaRepository = EmpresaRepository;
//# sourceMappingURL=empresa.repository.js.map