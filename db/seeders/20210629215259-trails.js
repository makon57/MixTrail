'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Trails', [{
        
      }], {});
    

 
  
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Trails', null, {});
    
  }
};
