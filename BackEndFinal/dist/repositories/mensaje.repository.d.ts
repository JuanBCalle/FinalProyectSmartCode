import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { MongoDbDataSource } from '../datasources';
import { Mensaje, MensajeRelations, Empleado } from '../models';
import { EmpleadoRepository } from './empleado.repository';
export declare class MensajeRepository extends DefaultCrudRepository<Mensaje, typeof Mensaje.prototype.id, MensajeRelations> {
    protected empleadoRepositoryGetter: Getter<EmpleadoRepository>;
    readonly empleado: BelongsToAccessor<Empleado, typeof Mensaje.prototype.id>;
    constructor(dataSource: MongoDbDataSource, empleadoRepositoryGetter: Getter<EmpleadoRepository>);
}
