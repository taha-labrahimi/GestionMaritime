const { DataTypes } = require('sequelize');
const Port = require('./Port');
const sequelize = require('./connection');

const Navire = sequelize.define('Navire', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    capacite: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    etat: {
        type: DataTypes.STRING,
        allowNull: false
    },
    portId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Ports',
            key: 'id'
        }
    }
}, {
    timestamps: false
});

Navire.belongsTo(Port, { foreignKey: 'portId' });

module.exports = Navire;
