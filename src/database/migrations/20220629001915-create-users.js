'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      displayName: Sequelize.STRING(255),
      email: {
        type: Sequelize.STRING(255),
        unique: true,
      },
      password: Sequelize.STRING(255),
      image: Sequelize.STRING(255)
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
