'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trail = sequelize.define('Trail', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    state: DataTypes.STRING
  }, {});
  Trail.associate = function(models) {
    Trail.belongsTo(models.TrailList, {foreignKey: 'trailId'})
    Trail.hasMany(models.Review, {foreignKey: 'trailId'})
  };
  return Trail;
};