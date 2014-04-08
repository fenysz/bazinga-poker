var httpSync = require('http-sync');

module.exports = {
    fetch: function(cards) {
        var request = httpSync.request({
                method: 'POST',
                headers: {},
                body: 'cards=' + JSON.stringify(cards),

                protocol: 'http',
                host: 'localhost',
                port: 2048,
                path: '/'
            }),

            response = request.end();

        return JSON.parse(response.body.toString());
    }
};