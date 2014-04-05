var RequestDispatcher = require('./request_dispatcher');

module.exports = {

    VERSION: "Super AI 2.0 Courage Engine",

    bet_request: function (game_state_data) {
        return RequestDispatcher.apply(game_state_data);
    },

    showdown: function (game_state) {

    }
};
