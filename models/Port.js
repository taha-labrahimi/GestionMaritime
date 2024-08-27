const { DataTypes } = require('sequelize');
const sequelize = require('./connection');

const Port = sequelize.define('Port', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    localisation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    capacite: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pays: {
        type: DataTypes.STRING,
        allowNull: false
    },
    heuresOuverture: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Port;
