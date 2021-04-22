const Bookings = require('../models/bookings.js');

module.exports = (sequelize, type) => {
  const Users = sequelize.define('Users', {
        id: {
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
  // {
  //   classMethods:{
  //           associate:function(models){
  //               Users.hasMany(models.Bookings, { foreignKey: 'user_id'} );
  //           }
  //       }
  //   }
  );

    // Users.associate = models => {
    //   Users.hasMany(models.Bookings, { 
    //     onDelete: 'CASCADE'
    //   });
    // }

  return Users;

};