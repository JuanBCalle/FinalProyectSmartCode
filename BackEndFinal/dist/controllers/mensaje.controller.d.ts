import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Mensaje } from '../models';
import { EmpleadoRepository, MensajeRepository } from '../repositories';
import { NotificacionesService } from '../services';
export declare class MensajeController {
    mensajeRepository: MensajeRepository;
    notificaciones: NotificacionesService;
    empleado: EmpleadoRepository;
    constructor(mensajeRepository: MensajeRepository, notificaciones: NotificacionesService, empleado: EmpleadoRepository);
    create(mensaje: Omit<Mensaje, 'id'>): Promise<Mensaje>;
    count(where?: Where<Mensaje>): Promise<Count>;
    find(filter?: Filter<Mensaje>): Promise<Mensaje[]>;
    updateAll(mensaje: Mensaje, where?: Where<Mensaje>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Mensaje>): Promise<Mensaje>;
    updateById(id: string, mensaje: Mensaje): Promise<void>;
    replaceById(id: string, mensaje: Mensaje): Promise<void>;
    deleteById(id: string): Promise<void>;
}
