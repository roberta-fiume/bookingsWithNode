module.exports = (sequelize, type) => {
    return sequelize.define('bookings', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        firstname: type.STRING,
        lastname: type.STRING,
        email: type.STRING,
        booking_date: {
            type: type.DATE,
            allowNull: false,
            defaultValue: null
        }
    },
  )
}