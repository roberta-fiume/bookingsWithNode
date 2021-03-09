const Sequelize = require('sequelize');
const BookingModel = require('./models/bookings');
require('dotenv').config();

// const sequelize = new Sequelize('bookings', 'roberta', '1234', {
    // host: '35.235.54.201',
    // dialect: 'mysql',
    // port: 3306,
    // define: {
        // timestamps: false
    // }
// });

const sequelize = new Sequelize('bookings_gcp', 'roberta', '3456', {
    host: process.env.DB_HOST,
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



const Bookings = BookingModel(sequelize, Sequelize);

module.exports = {
  Bookings,
}