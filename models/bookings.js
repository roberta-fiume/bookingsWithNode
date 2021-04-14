
const Users = require('../models/users.js');
module.exports = (sequelize, type) => {
    return sequelize.define('bookings', {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: null
      },
      user_id:  {
        type: type.STRING,
        defaultValue: null,
        references: {
          // This is a reference to another model
          model: Users,
          // This is the column name of the referenced model
          key: 'user_id'
        }
      },
      date: {
          type: type.DATE,
          allowNull: false,
          defaultValue: null
      }
    },
  )
    bookings.associate = function(models) {
      bookings.belongsTo(models.Users, {foreignKey: 'user_id', as: 'users'})
    };
    sequelize.sync({
    force: true
  });
}

