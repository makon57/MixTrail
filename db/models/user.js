'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Review, {foreignKey:'userId'})
    User.hasMany(models.TrailList, {foreignKey: 'userId'})
  };
  return User;
};