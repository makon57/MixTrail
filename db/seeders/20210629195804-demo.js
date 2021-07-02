'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {username: "demoUser", email: "demo@demo.user", password: "D3mo!", createdAt: new Date (), updatedAt: new Date()},
      {username: "joyntables", email: "JP@wat.com", password: "D3mo!", createdAt: new Date (), updatedAt: new Date()},
      {username: "recrecurecursion", email: "recur@re.com", password: "D3mo!", createdAt: new Date (), updatedAt: new Date()},
      {username: "ToastingTests", email: "TT@aol.com", password: "D3mo!", createdAt: new Date (), updatedAt: new Date()},
      {username: "I_Still_Use_AOL", email: "winner@aol.com", password: "D3mo!", createdAt: new Date (), updatedAt: new Date()},
      {username: "granny", email: "QueenGranny@yahoo.com", password: "D3mo!", createdAt: new Date (), updatedAt: new Date()},
      {username: "Gerald_Kingston", email: "Gerry@aol.com", password: "D3mo!", createdAt: new Date (), updatedAt: new Date()},
      {username: "Manna", email: "Manna@manna.com", password: "1!Manna", createdAt: new Date (), updatedAt: new Date()},
      {username: "Lema", email: "Lema@lema.com", password: "1!Lema", createdAt: new Date (), updatedAt: new Date()},
      {username: "Simon", email: "Simon@simon.com", password: "1!Simon", createdAt: new Date (), updatedAt: new Date()},
      {username: "Jacob", email: "Jacob@jacob.com", password: "1!Jacob", createdAt: new Date (), updatedAt: new Date()},
      {username: "Javier-The-Goat", email: "Javier@aa.com", password: "1!Mortiz", createdAt: new Date (), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
