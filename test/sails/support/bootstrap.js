/**
* Created by francois on 31/12/13.
*/

/**
* Bootstrap the Sails server
*/

var sails;

/**
* Before ALL the test drop existing db and bootstrap the server
*/

before(function (done) {
  // start sails server
  require('sails').lift({
    // turn down the log level so we can view the test results
    log: { level: 'error' },
    // adapters: {
    //   'default': 'mongotest',
    //   mongotest: {
    //     module: 'sails-mongo',
    //     host: 'localhost',
    //     port: 27017,
    //     database: 'scoreboard-test'
    //   }
    // }
  }, function (err, sail) {
    // Reset database models
    // Board.destroy({}).done(function(err){ if(err){ console.log(err); } });
    // Score.destroy({}).done(function(err){ if(err){ console.log(err); } });
    // User.destroy({}).done(function(err){ if(err){ console.log(err); } });

    // export properties for upcoming tests with supertest.js
    sails = sail;
    global.testUrl = "http://localhost:1337";
    // console.log(sail.express)
    // global.app = sail;

    // save reference for teardown function
    done(err);
  });
});


/**
* After ALL the tests, lower sails
*/

after(function (done) {
  sails.lower(done);
});