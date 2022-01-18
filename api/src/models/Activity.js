const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
    // defino el modelo
    return sequelize.define('activity', {
      name: {
        type: DataTypes.STRING,
        
      },
      difficulty: {
        type: DataTypes.ENUM('1','2','3','4','5'),
        allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      season: {
        type: DataTypes.ENUM("Spring", "Summer", "Autumn", "Winter"),
        allowNull: true,
      },
    },{ timestamps: false },);

 
    
  };
