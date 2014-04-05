var GameState = require('./gamestate');
var Rates = require('./rates');

module.exports = {
    apply: function(game_state_data) {
        var gameState = new GameState(game_state_data),
            rate = gameState.rateHand();

        if (rate === Rates.VERY_GOOD) {
            return gameState.getMinimumRaise() + 200;
        }

        if (gameState.isPreFlopState() && (rate === Rates.GOOD)) {
            return gameState.getMinimumRaise();
        } else if (rate === Rates.GOOD) {
            return GameState.getMinimumRaise() + 50;
        }

        return 0;
    }
};