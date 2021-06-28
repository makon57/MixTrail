'use strict';
module.exports = (sequelize, DataTypes) => {
  const TrailList = sequelize.define('TrailList', {
    trailId: DataTypes.INTEGER,
    trailShelfId: DataTypes.INTEGER,
    hasVisited: DataTypes.BOOLEAN,
    wantToVisit: DataTypes.BOOLEAN
  }, {});
  TrailList.associate = function(models) {
    TrailList.belongsTo(models.TrailShelf, {foreignKey: 'trailShelfId'})
    TrailList.hasMany(models.Trail, {foreignKey:'trailId'})
  };
  return TrailList;
};