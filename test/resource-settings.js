(function () {
  "use strict";

  var connect = require('connect')
    , cors = require('../lib/connect-cors')
    , server
    ;


  server = connect.createServer(
      function (req, res, next) {
        next();
      }
    , cors({
          origins: ['*']
        , methods: ['HEAD', 'GET'] // No POST
        , headers: ['X-Requested-With', 'Accept'] // No X-HTTP-Method-Override
        , credentials: true // has Credentials
        , resources: [
              {
                  pattern: '/defaults'
              }
            , {
                  pattern: '/custom'
                , methods: ['HEAD', 'GET', 'POST', 'PUT']
                , headers: ['X-Test-Header']
                , credentials: false
              }
          ]
      })
  );

  server.listen('9000');
}());
