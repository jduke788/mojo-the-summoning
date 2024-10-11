const { Sequelize } = require("sequelize");
const {db, DataTypes} = require("../db/config.js");


const Card = db.define(
    "Card",
    {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    mojo: DataTypes.INTEGER,
    stamina:DataTypes.INTEGER,
    imgUrl: DataTypes.STRING   
});

//db.sync();
module.exports = Card;