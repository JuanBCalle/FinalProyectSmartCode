import { Entity } from '@loopback/repository';
import { Empleado } from './empleado.model';
import { Proveedor } from './proveedor.model';
export declare class Empresa extends Entity {
    Id?: string;
    RazonSocial: string;
    Nit: string;
    empleados: Empleado[];
    proveedors: Proveedor[];
    constructor(data?: Partial<Empresa>);
}
export interface EmpresaRelations {
}
export declare type EmpresaWithRelations = Empresa & EmpresaRelations;
