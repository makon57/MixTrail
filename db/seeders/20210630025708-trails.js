'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Trails', [{
        
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Trails', null, {});
  
  }
};
