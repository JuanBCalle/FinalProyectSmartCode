import { Empleado, Mensaje } from '../models';
import { MensajeRepository } from '../repositories';
export declare class MensajeEmpleadoController {
    mensajeRepository: MensajeRepository;
    constructor(mensajeRepository: MensajeRepository);
    getEmpleado(id: typeof Mensaje.prototype.id): Promise<Empleado>;
}
