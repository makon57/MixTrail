'use strict';
module.exports = (sequelize, DataTypes) => {
  const TrailShelf = sequelize.define('TrailShelf', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  TrailShelf.associate = function(models) {
    // associations can be defined here
  };
  return TrailShelf;
};