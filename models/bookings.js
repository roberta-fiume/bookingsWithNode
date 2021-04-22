
const Users = require('../models/users.js');
module.exports = (sequelize, type) => {
  const Bookings = sequelize.define('Bookings', {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        // defaultValue: null
      },
      // userId:  {
      //   type: type.STRING,
      //   allowNull: false,
      //   // primaryKey: true,
      // },
      date: {
          type: type.DATE,
          // allowNull: false,
          defaultValue: null
      },

    
    }
      // {
      //   classMethods:{
      //       associate:function(models){
      //           bookings.belongsTo(models.Users, { foreignKey:'user_id', onDelete: 'SET NULL', onUpdate: 'CASCADE'} );
      //       }
      //   }
      // }

    );

    // Bookings.associate = function(models){
    //   Bookings.belongsTo(models.Users, { foreignKey: 
    //     { 
    //       allowNull: false 
    //     }
    //   });
    // }
   return Bookings
}

