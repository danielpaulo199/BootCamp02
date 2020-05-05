import { resolve } from 'path';
import nodemailer from 'nodemailer';
import exphbs from 'express-handlebars';
import nodemailerhbs from 'nodemailer-express-handlebars';
import mailConfig from '../config/mail';

class Mail {
  constructor() {
    const { host, port, secure, auth } = mailConfig;

    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: auth.user ? auth : null,
    });

    this.configureTeamplates();
  }

  configureTeamplates() {
    const viewPath = resolve(
      __dirname,
      '..',
      'app',
      'views',
      'emails',
      'partials'
    );

    this.transporter.use(
      'compile',
      nodemailerhbs({
        viewEngine: exphbs.create({
          layoutsDir: resolve(
            __dirname,
            '..',
            'app',
            'views',
            'emails',
            'layouts'
          ),
          partialsDir: resolve(
            __dirname,
            '..',
            'app',
            'views',
            'emails',
            'partials'
          ),
          defaultLayout: 'default',
          extname: '.hbs',
        }),
        viewPath,
        extName: '.hbs',
      })
    );
  }

  sendMail(message) {
    return this.transporter.sendMail({
      ...mailConfig.dafault,
      ...message,
    });
  }
}
export default new Mail();
