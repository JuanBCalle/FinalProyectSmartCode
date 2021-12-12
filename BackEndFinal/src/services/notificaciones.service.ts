import { /* inject, */ BindingScope, injectable} from '@loopback/core';

@injectable({scope: BindingScope.TRANSIENT})
export class NotificacionesService {
  constructor(/* Add @inject to inject parameters */) { }
  /*
   * Add service methods here
   */
  EnviarMensajePorSMS(body: string, telefono: string) {
    const accountSid = 'ACc93bf2d968e3f3f7dc81afa861545f1c';
    const authToken = '773aecc443b543bfb1e822efe380c86c';
    const twilio = require('twilio');
    const client = new twilio(accountSid, authToken);

    client.messages
      .create({
        body: body,
        from: '+19142923108',
        to: '+57' + telefono
      })
      .then((message: any) => console.log(message.sid));

  }
}
