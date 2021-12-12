"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutenticacionService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const llaves_1 = require("../config/llaves");
const repositories_1 = require("../repositories");
const generador = require("password-generator");
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
let AutenticacionService = class AutenticacionService {
    constructor(/* Add @inject to inject parameters */ empleado) {
        this.empleado = empleado;
    }
    /*
     * Add service methods here
     */
    GenerarClave() {
        let clave = generador();
        return clave;
    }
    CifrarClave(clave) {
        let claveCifrada = cryptoJS.MD5().toString();
        return claveCifrada;
    }
    IdentificarEmpleado(usuario, pass) {
        try {
            let p = this.empleado.findOne({ where: { Nombres: usuario, clave: pass } });
            if (p) {
                return p;
            }
            return false;
        }
        catch (_a) {
            return false;
        }
    }
    GenerarTokenJWT(empleado) {
        let token = jwt.sign({
            data: {
                id: empleado.Id,
                nombre: empleado.Nombres + "" + empleado.Apellidos
            }
        }, llaves_1.Llaves.claveJWT);
        return token;
    }
    ValidarToken(token) {
        try {
            let datos = jwt.verify(token, llaves_1.Llaves.claveJWT);
            return datos;
        }
        catch (_a) {
            return false;
        }
    }
};
AutenticacionService = (0, tslib_1.__decorate)([
    (0, core_1.injectable)({ scope: core_1.BindingScope.TRANSIENT }),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.EmpleadoRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.EmpleadoRepository])
], AutenticacionService);
exports.AutenticacionService = AutenticacionService;
//# sourceMappingURL=autenticacion.service.js.map