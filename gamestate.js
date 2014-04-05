var Rates = require('./rates');

var GameState = function(game_state_data) {
    this.data = JSON.parse(game_state_data);
};

GameState.prototype = {
    getOurPlayer: function() {
        return this.data.players[this.data.in_action];
    },

    getHand: function() {
        return this.getOurPlayer().hole_cards;
    },

    rateHand: function() {
        var hand = this.getHand();
        return Rates.rateTwoCards(hand);
    },

    getHoldValue: function() {
        return this.data.current_buy_in - this.getOurPlayer().bet;
    },

    getMinimumRaise: function() {
        return this.data.current_buy_in - this.getOurPlayer().bet + this.data.minimum_raise;
    },

    isPreFlopState: function() {
        return this.data.community_cards.length === 0;
    },

    isFlop: function() {
        return this.data.community_cards.length === 3;
    },

    isTurn: function() {
        return this.data.community_cards.length === 4;
    },

    isRiver: function() {
        return this.data.community_cards.length === 5;
    }

};

module.exports = GameState;