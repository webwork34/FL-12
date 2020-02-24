class Card{
  static arrCards = [];
  constructor(suit, name, rank){
    this.suit = suit;
    this.name = name;
    this.rank = rank;
    Card.arrCards.push(this);
  }
 
  get isFaceCard(){
    if(this.rank === 1 || this.rank > 10){
      return true;  
    }else{
      return false;
    }
  }

  toString(){
    return `${this.name} of ${this.suit}`;
  }

  static Compare(cardOne, cardTwo){
    if(cardOne.rank > cardTwo.rank){
      return true;
    }else if(cardOne.rank < cardTwo.rank){
      return false;
    }
  }
}


class Deck{
  constructor(){
    this.cards = Card.arrCards.slice();
  }
  
  get count(){
    return this.cards.length;
  }

  shuffle(){
    let j, temp;
    for(let i = this.cards.length - 1; i > 0; i--){
      j = Math.floor(Math.random()*(i + 1));
      temp = this.cards[j];
      this.cards[j] = this.cards[i];
      this.cards[i] = temp;
    }
    return this.cards;
  }

  drawn(n){
    return this.cards.splice(-n, n);
  }
}


class Player{
  #wins = 0;
  constructor(name, deck){
    this.name = name;
    this.deck = deck;
  }

  get wins(){
    return this.#wins;
  }

  static Play(playerOne, playerTwo){
    let playerOneWinPoints = 0;
    let playerTwoWinPoints = 0;

    playerOne.deck.cards = Card.arrCards.slice();
    playerTwo.deck.cards = Card.arrCards.slice();

    playerOne.deck.cards = playerOne.deck.shuffle();
    playerTwo.deck.cards = playerTwo.deck.shuffle();

    while(playerOne.deck.count > 0){
     let compareResult = Card.Compare(playerOne.deck.cards[0], playerTwo.deck.cards[0]);
     if(compareResult){
      playerOneWinPoints++;
      playerOne.deck.cards = playerOne.deck.drawn(playerOne.deck.count - 1);
      playerTwo.deck.cards = playerTwo.deck.drawn(playerTwo.deck.count - 1);
     }else if(compareResult !== undefined){
      playerTwoWinPoints++;
      playerTwo.deck.cards = playerTwo.deck.drawn(playerTwo.deck.count - 1);
      playerOne.deck.cards = playerOne.deck.drawn(playerOne.deck.count - 1);
     }else{
      playerTwo.deck.cards = playerTwo.deck.drawn(playerTwo.deck.count - 1);
      playerOne.deck.cards = playerOne.deck.drawn(playerOne.deck.count - 1);
     }
    }
    if(playerOneWinPoints > playerTwoWinPoints){
      playerOne.#wins++;
      console.log(`${playerOne.name} wins ${playerOneWinPoints} to ${playerTwoWinPoints}`);
    }else if(playerTwoWinPoints > playerOneWinPoints){
      playerTwo.#wins++;
      console.log(`${playerTwo.name} wins ${playerTwoWinPoints} to ${playerOneWinPoints}`);
    }else{
      console.log('DRAW');
    }
  }
}

const ranks = {
        1: 'Ace',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five',
        6: 'Six',
        7: 'Seven',
        8: 'Eight',
        9: 'Nine',
        10: 'Ten',
        11: 'Jack',
        12: 'Queen',
        13: 'King'
      };

for (let i = 1; i < 14; i++) {
  new Card('Hearts', ranks[i], i);
}
for (let i = 1; i < 14; i++) {
  new Card('Diamonds', ranks[i], i);
}
for (let i = 1; i < 14; i++) {
  new Card('Clubs', ranks[i], i);
}
for (let i = 1; i < 14; i++) {
  new Card('Spades', ranks[i], i);
}

const deck1 = new Deck();
const deck2 = new Deck();
const deck3 = new Deck();

const player1 = new Player('player1', deck1);
const player2 = new Player('player2', deck2);
const player3 = new Player('player3', deck3);