const { DataTypes } = require('sequelize');
const sequelize = require('./connection');

const Client = sequelize.define('Client', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    adresse: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numTel: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
}, {
    timestamps: false
});


sequelize.sync({ alter: true })
    .then(() => {
        console.log('Client table has been created or updated.');
    })
    .catch((error) => {
        console.error('Error creating or updating the Client table:', error);
    });

module.exports = Client;
