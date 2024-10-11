const { Sequelize } = require("sequelize");
const {db, DataTypes} = require("../db/config.js");


const Attack = db.define(
    "Attack",
    {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    mojoCost: DataTypes.INTEGER,
    staminaCost: DataTypes.INTEGER   
});

//db.sync();
module.exports = Attack;