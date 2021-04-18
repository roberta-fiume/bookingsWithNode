
const Users = require('../models/users.js');
module.exports = (sequelize, type) => {
  const Bookings = sequelize.define('bookings', {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        // defaultValue: null
      },
      user_id:  {
        type: type.STRING,
        defaultValue: null,
        references: {
          // This is a reference to another model
          model: Users,
          // This is the column name of the referenced model
          key: 'id'
        }
      },
      date: {
          type: type.DATE,
          // allowNull: false,
          defaultValue: null
      }
    });


    Bookings.associate = function(models){
      Bookings.belongsTo(models.Users, { foreignKey:'user_id', onDelete: 'SET NULL', onUpdate: 'CASCADE'} );
    }

    // {
    //   classMethods:{
    //       associate:function(models){
    //           Bookings.belongsTo(models.Users, { foreignKey:'user_id', onDelete: 'SET NULL', onUpdate: 'CASCADE'} );
    //       }
    //   }
    // }


  return Bookings;
  //   bookings.associate = function(models) {
  //     bookings.belongsTo(models.Users, {foreignKey: 'user_id', onDelete: 'SET NULL', onUpdate: 'CASCADE',})
  //   };
  //   sequelize.sync({
  //   force: true
  // }); 
}

