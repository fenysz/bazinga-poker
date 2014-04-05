var GameState = require('./gamestate');
var Rates = require('./rates');
var RankingService = require('./rankingservice');

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
            var cards = gameState.getHand().concat(gameState.data.community_cards),
                rankingStat = RankingService.fetch(cards);

            if (rankingStat.rank >= 2) {
                return gameState.getMinimumRaise() + 200;
            }

            return gameState.getHoldValue();
        }

        return 0;
    }
};