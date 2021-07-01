// http://toon.io/understanding-passportjs-authentication-flow/

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {

    const user = await User.findOne({ email });

    if (!user) {
        return done(null, false, { message: 'Not user found' })
    } else {
        const passwordMatch = await user.matchPassword(password);
        if (passwordMatch) {
            return done(null, user, { message: 'Success!' })
        } else {
            return done(null, false, { message: 'Incrrect password' });
        }
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    }).lean()
});