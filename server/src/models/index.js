const { User } = require('./User')
const { Deck } = require("./Deck.js");
const { Card } = require("./Card.js");
const { Attack } = require("./Attack.js");
// import the rest of your models above

// set up the associations here
//Users and Decks one-to-one
User.hasOne(Deck);
Deck.belongsTo(User);


//Deck and Card - one-to-many
Deck.hasMany(Card);
Card.belongsTo(Deck);


//Card and Attack - many-to-many
Card.belongsToMany(Attack, { through: "cardAttacks"})
Attack.belongsToMany(Card, {through: "cardAttacks"})


// and then export them all below
module.exports = { User,
    Deck,
    Card,
    Attack
 }
