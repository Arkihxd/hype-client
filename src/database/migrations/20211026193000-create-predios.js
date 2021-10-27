'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('predios', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sigla: Sequelize.STRING,
      endereco: Sequelize.STRING,
      cidade: Sequelize.STRING,
      estado: Sequelize.STRING,
      created_at: {
        type: Sequelize.DATE,
        allowNull: false, 
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false, 
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('predios');
  }
};
