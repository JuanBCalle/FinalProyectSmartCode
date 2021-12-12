import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Proveedor } from '../models';
import { ProveedorRepository } from '../repositories';
export declare class ProveedorController {
    proveedorRepository: ProveedorRepository;
    constructor(proveedorRepository: ProveedorRepository);
    create(proveedor: Omit<Proveedor, 'Id'>): Promise<Proveedor>;
    count(where?: Where<Proveedor>): Promise<Count>;
    find(filter?: Filter<Proveedor>): Promise<Proveedor[]>;
    updateAll(proveedor: Proveedor, where?: Where<Proveedor>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Proveedor>): Promise<Proveedor>;
    updateById(id: string, proveedor: Proveedor): Promise<void>;
    replaceById(id: string, proveedor: Proveedor): Promise<void>;
    deleteById(id: string): Promise<void>;
}
