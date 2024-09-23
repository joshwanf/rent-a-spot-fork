'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Spot.belongsTo(models.User, { foreignKey: 'ownerId', as: 'Owner' });
      Spot.hasMany(models.Review, { foreignKey: 'spotId' });
    }
  }
  Spot.init({
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
      },
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
      // unique: true,
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: false,
      // unique: 'addressIndex',
    },
    state: {
      type: DataTypes.TEXT,
      allowNull: false,
      // unique: 'addressIndex',
    },
    country: {
      type: DataTypes.TEXT,
      allowNull: false,
      // unique: 'addressIndex',
    },
    lat: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    lng: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Spot',
    indexes: [
      // { unique: true, fields: ['address'] },
      // { unique: true, fields: ['city', 'state', 'country'] },
      { unique: true, fields: ['lat', 'lng'] },
    ]
  });
  return Spot;
};