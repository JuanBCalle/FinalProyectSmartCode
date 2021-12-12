import { Count, Filter, Where } from '@loopback/repository';
import { Empleado, Mensaje } from '../models';
import { EmpleadoRepository } from '../repositories';
export declare class EmpleadoMensajeController {
    protected empleadoRepository: EmpleadoRepository;
    constructor(empleadoRepository: EmpleadoRepository);
    find(id: string, filter?: Filter<Mensaje>): Promise<Mensaje[]>;
    create(id: typeof Empleado.prototype.Id, mensaje: Omit<Mensaje, 'id'>): Promise<Mensaje>;
    patch(id: string, mensaje: Partial<Mensaje>, where?: Where<Mensaje>): Promise<Count>;
    delete(id: string, where?: Where<Mensaje>): Promise<Count>;
}
