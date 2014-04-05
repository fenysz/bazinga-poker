var GameState = require('./gamestate');
var Rates = require('./rates');
var RankingService = require('./rankingservice');

module.exports = {
    apply: function(game_state_data) {
        var gameState = new GameState(game_state_data),
            rate = gameState.rateHand();

        if (rate === Rates.VERY_GOOD) {
            return gameState.getMinimumRaise() + (Math.round((Math.random() * 100)) + 150);
        }

        if (!gameState.isPreFlopState()) {
            var hand = gameState.getHand(),
                cards = hand.concat(gameState.data.community_cards),
                rankingStat = RankingService.fetch(cards),
                rankingStat1, rankingStat2;

            if (rankingStat.rank >= 2) {

                if (gameState.isTurn()) {
                    rankingStat1 = RankingService.fetch([hand[0]].concat(gameState.data.community_cards));
                    rankingStat2 = RankingService.fetch([hand[1]].concat(gameState.data.community_cards));

                    if ((rankingStat.rank > rankingStat1.rank) && (rankingStat.rank > rankingStat2.rank)) {
                        return gameState.getMinimumRaise() + (Math.round((Math.random() * 100)) + 400);
                    }
                } else if (gameState.isRiver()) {
                    rankingStat1 = RankingService.fetch(gameState.data.community_cards);

                    if (rankingStat1.rank > 4) {
                        return 5000;
                    }

                    if (rankingStat.rank > rankingStat1.rank) {
                        return gameState.getMinimumRaise() + (Math.round((Math.random() * 100)) + 400);
                    }
                } else if (gameState.isFlop()) {
                    return gameState.getMinimumRaise() + (Math.round((Math.random() * 100)) + 150);
                }
            }
        }

        if (gameState.isPreFlopState() && (rate === Rates.GOOD)) {
            return gameState.getMinimumRaise();
        } else if (rate === Rates.GOOD) {
            return gameState.getHoldValue();
        }

        return 0;
    }
};