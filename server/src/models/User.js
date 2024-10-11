// create your User model here
const { Sequelize } = require("sequelize");
const {db, DataTypes} = require("server\src\db\config.js");


const User = db.define(
    "User",
    {
    username: DataTypes.STRING,
    id: DataTypes.INTEGER   
});

//db.sync();
module.exports = User;