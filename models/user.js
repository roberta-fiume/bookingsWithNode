module.exports = (sequelize, type) => {
    return sequelize.define('bookings', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          defaultValue: null
        },
        user_id: type.INTEGER,
        date: {
            type: type.DATE,
            allowNull: false,
            defaultValue: null
        }
    },
  )
}