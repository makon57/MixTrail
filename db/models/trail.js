'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trail = sequelize.define('Trail', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    state: DataTypes.STRING
  }, {});
  Trail.associate = function(models) {
    Trail.hasMany(models.Review, {foreignKey: 'trailId'})
    Trail.belongsToMany(models.TrailList, {through: 'Join', foreignKey: 'trailId', otherKey: 'trailListId'} )
  };
  return Trail;
};
