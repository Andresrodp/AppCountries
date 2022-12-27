const {DataTypes} = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('Activities', {
        ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        duration: {
            type: DataTypes.STRING,
            allowNull: true
        },
        season: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        }
    }, {timestamps: false})
}

