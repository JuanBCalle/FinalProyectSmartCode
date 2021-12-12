import { Empleado } from '../models';
import { EmpleadoRepository } from '../repositories';
export declare class AutenticacionService {
    empleado: EmpleadoRepository;
    constructor(/* Add @inject to inject parameters */ empleado: EmpleadoRepository);
    GenerarClave(): any;
    CifrarClave(clave: string): any;
    IdentificarEmpleado(usuario: string, pass: string): false | Promise<(Empleado & import("../models").EmpleadoRelations) | null>;
    GenerarTokenJWT(empleado: Empleado): any;
    ValidarToken(token: string): any;
}
