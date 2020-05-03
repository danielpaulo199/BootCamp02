import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/User'; // importar models
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';

const models = [User, File, Appointment]; // Array que armaena todos os models

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig); // parametros de conecxão

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
