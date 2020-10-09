const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = null;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    var cards = [];
    prototypeQuestions.forEach(question => {
      var card = new Card(prototypeQuestions);
      cards.push(card)
      return cards;
    })
  
    var deck = new Deck(cards);
    var round = new Round(deck);
    this.printMessage();
    this.printQuestion();
  }
}

module.exports = Game;