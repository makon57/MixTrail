'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    trailId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    text: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User,{foreignKey:'userId'})
    Review.belongsTo(models.Trail, {foreignKey: 'trailId'})
  };
  return Review;
};
