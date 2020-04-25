import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/User'; // importar models

const models = [User]; // Array que armaena todos os models

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig); // parametros de conecxão

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
