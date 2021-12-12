"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensajeRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let MensajeRepository = class MensajeRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, empleadoRepositoryGetter) {
        super(models_1.Mensaje, dataSource);
        this.empleadoRepositoryGetter = empleadoRepositoryGetter;
        this.empleado = this.createBelongsToAccessorFor('empleado', empleadoRepositoryGetter);
        this.registerInclusionResolver('empleado', this.empleado.inclusionResolver);
    }
};
MensajeRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.mongoDB')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('EmpleadoRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MongoDbDataSource, Function])
], MensajeRepository);
exports.MensajeRepository = MensajeRepository;
//# sourceMappingURL=mensaje.repository.js.map