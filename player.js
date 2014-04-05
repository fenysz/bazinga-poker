var RequestDispatcher = require('./request_dispatcher');

module.exports = {

    VERSION: "Mr Bazinga PreFlop Version",

    bet_request: function (game_state_data) {
        return RequestDispatcher.apply(game_state_data);
    },

    showdown: function (game_state) {

    }
};
