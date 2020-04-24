module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      name: {
        type: Sequelize.STRING,
        alowNull: false,
      },

      email: {
        type: Sequelize.STRING,
        alowNull: false,
        unique: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        alowNull: false,
      },
      provider: {
        type: Sequelize.BOOLEAN,
        default: false,
        alowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        alowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        alowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('users');
  },
};
