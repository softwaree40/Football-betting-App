"use strict"

const game = {
team1: "Bayern Munich",
team2: "Borrussia Dortmund",
players: [
[ 
    "Neuer",
    "Pavard",
    "Martinez",
    "Alaba",
    "Davies",
    "Kimmich",
    "Goretzka",
    "Coman",
    "Muller",
    "Gnarby",
    "Lewandowski"


],
[
  "Burki",
  "Schulz",
  "Hummels",
  "Akanji",
  "Hakimi",
  "Weigl",
  "Witsel",
  "Hazard",
  "Brandt",
  "Sancho",
  "Gotze",

],

],
score: "4:0",
scored: ["Lewandowski", "Gnarby", "Lewandowski","Hummels"],
date: "Nov 9th, 2037",
odds: {
 team1: 1.33,
 x: 3.25,
 team2: 6.5,

},


};

//Create two players1 and players2 using destructuring

const  [player1,player2] = game.players
//isolate one player out of the 11 players store in the var by using destructuring

const [goalkeeper1,...fieldplayers1] = player1
const [goalkeeper2,...fieldplayers2] = player2

//Let create all player for both teams

const allPlayers= [...fieldplayers1,...fieldplayers2]
// add more players to player1 

const morePlayerToPlayer1 = [...fieldplayers1,"Wale","Mike","Peter"]
console.log(morePlayerToPlayer1)
//Destructuring using Object

const {odds: {team1,x:draw,team2}} = game

