module.exports = (sequelize, type) => {
  return sequelize.define('users', {
      user_id: {
        type: type.STRING,
        autoincrement: false,
        defaultValue: null
      },
      name: {
          type: type.STRING,
          defaultValue: null
        },
      email: {
          type: type.STRING,
          defaultValue: null
      }
  },
)
}