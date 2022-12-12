'use strict';
const {
  Model, Error
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Station extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Trip }) {
      // define association here
      this.hasMany(Trip, { foreignKey: "fromStation", as: "from" })
      this.hasMany(Trip, { foreignKey: "toStation", as: "to" })
    }
  }
  Station.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [5, 30]
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [5, 50]
      }
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        checkLen(value) {
          if (value.length >= 5 && value.length <= 30) {
            return true
          } else {
            throw new Error("độ dài phải từ 5 - 30")
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Station',
  });
  return Station;
};