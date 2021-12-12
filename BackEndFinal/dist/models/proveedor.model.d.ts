import { Entity } from '@loopback/repository';
export declare class Proveedor extends Entity {
    Id: string;
    Nombre: string;
    RazonSocial: string;
    Direccion: string;
    Telefono: string;
    ActividadEconomica: string;
    empresaId?: string;
    constructor(data?: Partial<Proveedor>);
}
export interface ProveedorRelations {
}
export declare type ProveedorWithRelations = Proveedor & ProveedorRelations;
