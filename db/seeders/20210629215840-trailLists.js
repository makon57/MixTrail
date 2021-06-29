'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('TrailLists', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
  
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkDelete('TrailLists', null, {});
    
  }
};
