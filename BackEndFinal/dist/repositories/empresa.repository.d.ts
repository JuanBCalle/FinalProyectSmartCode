import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { MongoDbDataSource } from '../datasources';
import { Empresa, EmpresaRelations, Empleado, Proveedor } from '../models';
import { EmpleadoRepository } from './empleado.repository';
import { ProveedorRepository } from './proveedor.repository';
export declare class EmpresaRepository extends DefaultCrudRepository<Empresa, typeof Empresa.prototype.Id, EmpresaRelations> {
    protected empleadoRepositoryGetter: Getter<EmpleadoRepository>;
    protected proveedorRepositoryGetter: Getter<ProveedorRepository>;
    readonly empleados: HasManyRepositoryFactory<Empleado, typeof Empresa.prototype.Id>;
    readonly proveedors: HasManyRepositoryFactory<Proveedor, typeof Empresa.prototype.Id>;
    constructor(dataSource: MongoDbDataSource, empleadoRepositoryGetter: Getter<EmpleadoRepository>, proveedorRepositoryGetter: Getter<ProveedorRepository>);
}
