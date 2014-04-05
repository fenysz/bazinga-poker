var cardsRankList = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'],

    VERY_GOOD = 'GOOD AS HELL',
    GOOD = 'GOOD',
    BAD = 'TOO BAD';

var getOurPlayer = function(game_state) {
    return game_state.players[game_state.in_action];
};

var getHand = function(player) {
    return player.hole_cards;
};

var rateHand = function(hand) {
    var rate = 0;

    if (hand[0].rank === hand[1].rank) {
        rate += 20;
    }

    if (hand[0].suit === hand[1].suit) {
        rate += 10;
    }

    if (cardsRankList.indexOf(hand[0].rank) > 8) {
        rate += 6;
    } else if (cardsRankList.indexOf(hand[0].rank) > 5) {
        rate += 3;
    }

    if (cardsRankList.indexOf(hand[1].rank) > 8) {
        rate += 6;
    } else if (cardsRankList.indexOf(hand[1].rank) > 5) {
        rate += 3;
    }

    console.log('Rate: ', rate);

    if (rate >= 20) {
        return VERY_GOOD;
    }

    if (rate >= 12) {
        return GOOD;
    }

    return BAD;
};


module.exports = {

    VERSION: "Mr Bazinga PreFlop Version",

    bet_request: function (game_state) {
        game_state = JSON.parse(game_state);

        var MrBazinga = getOurPlayer(game_state),
            hand = getHand(MrBazinga),
            rate = rateHand(hand),

            minimumRaise = game_state.current_buy_in - MrBazinga.bet + game_state.minimum_raise;


        if (rate === VERY_GOOD) {
            return minimumRaise + 200;
        }

        if (rate === GOOD) {
            return minimumRaise + 50;
        }

        return 0;
    },

    showdown: function (game_state) {

    }
};
