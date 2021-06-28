'use strict';
module.exports = (sequelize, DataTypes) => {
  const TrailList = sequelize.define('TrailList', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  TrailList.associate = function(models) {
    TrailList.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return TrailList;
};