import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Credenciales, Empleado } from '../models';
import { EmpleadoRepository } from '../repositories';
import { AutenticacionService, NotificacionesService } from '../services';
export declare class EmpleadoController {
    empleadoRepository: EmpleadoRepository;
    notificaciones: NotificacionesService;
    autenticacion: AutenticacionService;
    constructor(empleadoRepository: EmpleadoRepository, notificaciones: NotificacionesService, autenticacion: AutenticacionService);
    create(empleado: Omit<Empleado, 'Id'>): Promise<Empleado>;
    identificarEmpleado(credenciales: Credenciales): Promise<{
        data: {
            id: string | undefined;
            nombre: string;
        };
        tk: any;
    }>;
    count(where?: Where<Empleado>): Promise<Count>;
    find(filter?: Filter<Empleado>): Promise<Empleado[]>;
    updateAll(empleado: Empleado, where?: Where<Empleado>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Empleado>): Promise<Empleado>;
    updateById(id: string, empleado: Empleado): Promise<void>;
    replaceById(id: string, empleado: Empleado): Promise<void>;
    deleteById(id: string): Promise<void>;
}
