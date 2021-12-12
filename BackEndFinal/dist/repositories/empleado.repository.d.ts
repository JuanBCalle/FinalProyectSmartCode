import { Getter } from '@loopback/core';
import { BelongsToAccessor, DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MongoDbDataSource } from '../datasources';
import { Empleado, EmpleadoRelations, Empresa, Mensaje } from '../models';
import { EmpresaRepository } from './empresa.repository';
import { MensajeRepository } from './mensaje.repository';
export declare class EmpleadoRepository extends DefaultCrudRepository<Empleado, typeof Empleado.prototype.Id, EmpleadoRelations> {
    protected empresaRepositoryGetter: Getter<EmpresaRepository>;
    protected mensajeRepositoryGetter: Getter<MensajeRepository>;
    readonly empresa: BelongsToAccessor<Empresa, typeof Empleado.prototype.Id>;
    readonly mensajes: HasManyRepositoryFactory<Mensaje, typeof Empleado.prototype.Id>;
    constructor(dataSource: MongoDbDataSource, empresaRepositoryGetter: Getter<EmpresaRepository>, mensajeRepositoryGetter: Getter<MensajeRepository>);
}
