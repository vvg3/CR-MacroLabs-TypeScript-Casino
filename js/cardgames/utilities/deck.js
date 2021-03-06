"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = require("./card");
class Deck {
    constructor() {
        this._cardDeck = new Array();
        this.buildDeck();
        this.shuffle();
    }
    get deck() {
        return this._cardDeck;
    }
    set deck(newDeck) {
        this._cardDeck = newDeck;
    }
    deal() {
        let card = this._cardDeck[this._cardDeck.length - 1];
        this._cardDeck.splice(this._cardDeck.length - 1, 1);
        // console.log(card);
        return card;
    }
    buildDeck() {
        let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        let suits = ["diamonds", "hearts", "spades", "clubs"];
        for (var i = 0; i < suits.length; i++) {
            for (var j = 0; j < cards.length; j++) {
                let card = new card_1.Card(suits[i], cards[j]);
                this._cardDeck.push(card);
            }
        }
    }
    shuffle() {
        for (var i = 0; i < 1000; i++) {
            let location1 = Math.floor((Math.random() * this._cardDeck.length));
            let location2 = Math.floor((Math.random() * this._cardDeck.length));
            let temp = this._cardDeck[location1];
            this._cardDeck[location1] = this._cardDeck[location2];
            this._cardDeck[location2] = temp;
        }
    }
}
exports.Deck = Deck;
let myDeck = new Deck();
console.log(myDeck.deal());
