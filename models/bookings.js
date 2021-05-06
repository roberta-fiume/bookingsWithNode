
const Users = require('../models/users.js');
module.exports = (sequelize, type) => {
  const Bookings = sequelize.define('Bookings', {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      userId:  {
        type: type.STRING,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'userId',
        }
      },
      date: {
        type: type.DATE,
        allowNull: false,
      },

    
    }
  );
   return Bookings
}



