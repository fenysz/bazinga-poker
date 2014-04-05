module.exports = {

    VERSION: "Mr Bazinga version 0.1",

    bet_request: function (game_state) {
        console.log(game_state.players);

        return 500;
//	    var additional_raise = 100,
//		    us = game_state.players[game_state.in_action];
//
//	    console.log(game_state.players);
//        return (game_state.current_buy_in - us.bet + (game_state.minimum_raise + additional_raise));
    },

    showdown: function (game_state) {

    }
};
