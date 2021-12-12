import { Entity } from '@loopback/repository';
export declare class Mensaje extends Entity {
    id?: string;
    body: string;
    empleadoId: string;
    constructor(data?: Partial<Mensaje>);
}
export interface MensajeRelations {
}
export declare type MensajeWithRelations = Mensaje & MensajeRelations;
