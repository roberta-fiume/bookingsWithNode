const Bookings = require('../models/bookings.js');

module.exports = (sequelize, type) => {
  const Users = sequelize.define('users', {
        id: {
        type: type.STRING,
        autoincrement: false,
        primaryKey: true,
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
  });

    // {
    //   classMethods:{
    //           associate:function(models){
    //               Users.hasMany(models.Bookings, { foreignKey: 'user_id'} );
    //           }
    //       }
    //   }
 

    Users.associate = models => {
        Users.hasMany(models.Bookings, {foreignKey: 'id', onDelete: 'SET NULL', onUpdate: 'CASCADE'});
    }

  return Users;

};