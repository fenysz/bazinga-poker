var Rates = require('./rates');

var GameState = function(game_state_data) {
    this.data = JSON.parse(game_state_data);
};

GameState.prototype = {
    getOurPlayer: function() {
        return this.data.players[this.data.in_action];
    },

    getHand: function(player) {
        return player.hole_cards;
    },

    rateHand: function() {
        var hand = this.getHand(this.getOurPlayer());
        return Rates.rateTwoCards(hand);
    },

    getMinimumRaise: function() {
        return this.data.current_buy_in - this.getOurPlayer().bet + this.data.minimum_raise;
    },

    isPreFlopState: function() {
        return this.data.community_cards.length === 0;
    }
};

module.exports = GameState;