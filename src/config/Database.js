const { Sequelize } = require("sequelize");
const dotenv = require("dotenv")
dotenv.config({ path: "./.env" })

const db = new Sequelize(process.env.NAME_DB, process.env.USER_DB, process.env.PASSWORD_DB, {
    host: process.env.HOST_DB,
    dialect: 'mysql',
    port: process.env.PORT_DB
});

module.exports = db;