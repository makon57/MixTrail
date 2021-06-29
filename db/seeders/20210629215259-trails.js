'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Trails', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    

 
  
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Trails', null, {});
    
  }
};
