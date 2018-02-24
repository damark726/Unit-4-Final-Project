const passport = require('passport');
const User = require('../../models/user');

module.exports = () => {
  passport.serializeUser((user, done) => {
    console.log('found a thing in serialize', user)
    return done(null, user.username);
  });

  passport.deserializeUser((username, done) => {
    User.findByUserName(username)
      .then(user => {
        console.log('found a thing in deserialize', user)
        return done(null, user);
      }).catch(err => {
        return done(err, null);
      });
  });
};
