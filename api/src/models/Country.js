const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Countries', {
    ID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull:true
    },
    img_flag:{
      type: DataTypes.STRING,
      allowNull:false
    },
    continents:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull:false
    },
    subregion:{
      type: DataTypes.STRING,
      allowNull: true
    },
    area: {
      type: DataTypes.STRING,
      allowNull: true
    },
    population:{
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {timestamps: false});
};
