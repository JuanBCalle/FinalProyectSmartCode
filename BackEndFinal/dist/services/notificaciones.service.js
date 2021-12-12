"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificacionesService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
let NotificacionesService = class NotificacionesService {
    constructor( /* Add @inject to inject parameters */) { }
    /*
     * Add service methods here
     */
    EnviarMensajePorSMS(body, telefono) {
        const accountSid = 'ACc93bf2d968e3f3f7dc81afa861545f1c';
        const authToken = 'd1013745bea84299b3a21188560420f9';
        const twilio = require('twilio');
        const client = new twilio(accountSid, authToken);
        client.messages
            .create({
            body: body,
            from: '+19142923108',
            to: '+57' + telefono
        })
            .then((message) => console.log(message.sid));
    }
};
NotificacionesService = (0, tslib_1.__decorate)([
    (0, core_1.injectable)({ scope: core_1.BindingScope.TRANSIENT }),
    (0, tslib_1.__metadata)("design:paramtypes", [])
], NotificacionesService);
exports.NotificacionesService = NotificacionesService;
//# sourceMappingURL=notificaciones.service.js.map