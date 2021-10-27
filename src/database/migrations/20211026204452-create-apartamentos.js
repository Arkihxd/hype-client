'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('apartamentos', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      predio_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'predios', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      codigo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quartos: Sequelize.INTEGER,
      banheiros: Sequelize.INTEGER,
      suites: Sequelize.INTEGER,
      area: Sequelize.FLOAT,
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
    return queryInterface.dropTable('apartamentos');
  }
};
