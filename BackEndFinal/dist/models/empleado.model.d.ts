import { Entity } from '@loopback/repository';
import { Mensaje } from './mensaje.model';
export declare class Empleado extends Entity {
    Id?: string;
    Nombres: string;
    Apellidos: string;
    Telefono: string;
    Direccion: string;
    Email: string;
    Edad: string;
    FechaNacimiento: string;
    Sueldo: number;
    clave: string;
    EsDirectivo: boolean;
    EsCliente: boolean;
    empresaId: string;
    mensajes: Mensaje[];
    constructor(data?: Partial<Empleado>);
}
export interface EmpleadoRelations {
}
export declare type EmpleadoWithRelations = Empleado & EmpleadoRelations;
