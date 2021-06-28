'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Review, {foreignKey:'userId'})
    User.hasMany(models.TrailShelf, {foreignKey: 'userId'})
    User.belongsToMany(models.TrailList, {through:'TrailShelves', otherKey: 'trailShelfId', foreignKey: 'userId'})
  };
  return User;
};