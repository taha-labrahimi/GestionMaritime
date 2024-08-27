const { DataTypes } = require('sequelize');
const sequelize = require('./connection');
const Navire = require('./Navire');
const Armateur = require('./Armateur');
const Port = require('./Port');
const Client = require('./Client');

const Conteneur = sequelize.define('Conteneur', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    taille: {
        type: DataTypes.STRING,
        allowNull: false
    },
    etat: {
        type: DataTypes.STRING,
        allowNull: false
    },
    poids: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    contenu: {
        type: DataTypes.STRING,
        allowNull: false
    },
    navireId: {
        type: DataTypes.INTEGER,
        references: {
            model: Navire,
            key: 'id'
        }
    },
    armateurId: {
        type: DataTypes.INTEGER,
        references: {
            model: Armateur,
            key: 'id'
        }
    },
    portId: {
        type: DataTypes.INTEGER,
        references: {
            model: Port,
            key: 'id'
        }
    },
    clientId: {
        type: DataTypes.INTEGER,
        references: {
            model: Client,
            key: 'id'
        }
    }
}, {
    timestamps: false
});

Conteneur.belongsTo(Navire, { foreignKey: 'navireId' });
Conteneur.belongsTo(Armateur, { foreignKey: 'armateurId' });
Conteneur.belongsTo(Port, { foreignKey: 'portId' });
Conteneur.belongsTo(Client, { foreignKey: 'clientId' });

module.exports = Conteneur;
