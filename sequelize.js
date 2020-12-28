const Sequelize = require('sequelize');
const UserModel = require('./models/user')

const sequelize = new Sequelize('projects_database', 'roberta', '1234', {
    host: '35.235.54.201',
    dialect: 'mysql',
    port: 3306,
    define: {
        timestamps: false
    }
});

sequelize.authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch((err) => {
            console.log('Unable to connect to the database');
        });



const Bookings = UserModel(sequelize, Sequelize);

module.exports = {
  Bookings,
}