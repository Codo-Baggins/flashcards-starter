const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  
  returnCurrentCard() {
    return this.deck.cards[0];
  }

  takeTurn(guess) {
    var turn = new Turn(guess, this.returnCurrentCard());
    this.turns += 1;

    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.returnCurrentCard().id);
    } 

    this.deck.cards.shift();
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return (this.turns - this.incorrectGuesses) / this.turns;
  }

  endRound() {
    return console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
  }
}

module.exports = Round;