'use strict';
module.exports = (sequelize, DataTypes) => {
  const TrailShelf = sequelize.define('TrailShelf', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  TrailShelf.associate = function(models) {
    TrailShelf.belongsTo(models.User, {foreignKey: 'userId'})
    // TrailShelf.hasMany(models.TrailList, {foreignKey: 'trailShelfId'})
  };
  return TrailShelf;
};