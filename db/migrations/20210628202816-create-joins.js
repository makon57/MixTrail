'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Joins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      trailId: {
       allowNull: false,
       references: { model: "Trails" },
        type: Sequelize.INTEGER
      },
      trailListId: {
      allowNull: false,
      references: { model: "TrailLists" },
        type: Sequelize.INTEGER
      },
      hasVisited: {
        type: Sequelize.BOOLEAN
      },
      wantToVisit: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Joins');
  }
};