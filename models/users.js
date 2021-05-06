const Bookings = require('../models/bookings.js');

module.exports = (sequelize, type) => {
  const Users = sequelize.define('Users', {
        userId: {
        // FOREIGN KEY IN BOOKINGS TABLE
        type: type.STRING,
        primaryKey: true,
     
        // autoincrement: false,
        allowNull: false,
        // defaultValue: null
      },
      name: {
        type: type.STRING,
        defaultValue: null
      },
      email: {
        type: type.STRING,
        defaultValue: null
      }
  }
  );

  return Users;

};