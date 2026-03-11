const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env_DB_Name,
  process.env.DB_User,
  process.env.DB_Password,
  {
    host: process.env.DB_Host,
    port: process.env.DB_PORT,
    dialect: "postgres",
  },
);

sequelize
  .authenticate()
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("DB error :", err);
  });

module.exports = sequelize;
