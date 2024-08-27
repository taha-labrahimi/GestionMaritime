const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gestionmaritime_db', 'admin', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
