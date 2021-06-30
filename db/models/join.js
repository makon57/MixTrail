'use strict';
module.exports = (sequelize, DataTypes) => {
  const Join = sequelize.define('Join', {
    trailId: DataTypes.INTEGER,
    trailShelfId: DataTypes.INTEGER,
    hasVisited: DataTypes.BOOLEAN,
    wantToVisit: DataTypes.BOOLEAN
  }, {});
  Join.associate = function(models) {
    // Join.belongsTo(models.TrailList, {foreignKey: 'trailListId'})
    // Join.hasMany(models.Trail, {foreignKey:'trailId'})
  };
  return Join;
};
