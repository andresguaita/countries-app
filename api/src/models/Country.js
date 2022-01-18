const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define('country', {
    id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Flag not found'
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Continent not found'
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,

    },
    area: {
      type: DataTypes.INTEGER,
  
    },
    population: {
      type: DataTypes.INTEGER,
      defaultValue: 0

    },
  
  },
  { timestamps: false },
  );};

