# Bootstrap the Sails server

sails = null

# Before ALL the test drop existing db and bootstrap the server

before((done) ->
  # start sails server
  require('sails').lift({
    environment: 'test'
    # turn down the log level so we can view the test results
    log:
      level: 'error'
    # adapters: {
    #   'default': 'mongotest',
    #   mongotest: {
    #     module: 'sails-mongo',
    #     host: 'localhost',
    #     port: 27017,
    #     database: 'scoreboard-test'
    #   }
    # }
  }, (err, sail) ->
    # Reset database models
    # Board.destroy({}).done(function(err){ if(err){ console.log(err); } });
    # Score.destroy({}).done(function(err){ if(err){ console.log(err); } });
    # User.destroy({}).done(function(err){ if(err){ console.log(err); } });

    # export properties for upcoming tests with supertest.js
    sails = sail
    global.testUrl = "http://localhost:1337"

    done(err);
  )
)

# After ALL the tests, lower sails

after((done) ->
  sails.lower(done)
)
