const helpers = {};

helpers.isAutenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
            return next()
    }
    req.flash('error_msg', 'You must login first!')
    res.redirect('/users/signin');
}

module.exports = helpers;