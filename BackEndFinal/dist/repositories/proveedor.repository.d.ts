import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDbDataSource } from '../datasources';
import { Proveedor, ProveedorRelations } from '../models';
export declare class ProveedorRepository extends DefaultCrudRepository<Proveedor, typeof Proveedor.prototype.Id, ProveedorRelations> {
    constructor(dataSource: MongoDbDataSource);
}
