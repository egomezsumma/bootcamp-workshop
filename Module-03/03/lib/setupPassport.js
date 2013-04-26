var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

var strategy = new Auth0Strategy({  
    domain:       'jose.auth0.com',
    clientID:     'KqU1m9hldJ1G5cEoaaw7AixxgjzrkPWu',
    clientSecret: 'KYUioHKlEY6dhlbis-3w4ZKNp4H03QNCRnqoV4bB0UDjJkiPFjH19nN6GwKjfMcm',
    callbackURL:  '/callback'
  }, function(accessToken, refreshToken, profile, done) {
    //Some tracing info
    console.log('profile is', profile);
    return done(null, profile);
  });

passport.use(strategy);

// This is not a best practice, but we want to keep things simple for now
passport.serializeUser(function(user, done) {
  done(null, user); 
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = strategy; 

// throw new Error('copy from https://docs.auth0.com/nodejs-tutorial');