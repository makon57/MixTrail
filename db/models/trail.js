'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trail = sequelize.define('Trail', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    state: DataTypes.STRING
  }, {});
  Trail.associate = function(models) {
    // associations can be defined here
  };
  return Trail;
};