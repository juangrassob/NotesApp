const { Router } = require('express');
const router = Router();
const {
    renderSingInForm,
    renderSingUpForm,
    logout,
    signup,
    signin,
    welcame
} = require('../controllers/users.controller');


// SignUp
router.get('/users/signup', renderSingUpForm);
router.post('/users/signup', signup)
// SignIn
router.get('/users/signin', renderSingInForm);
router.post('/users/signin', signin);
// Logout
router.get('/users/logout', logout);

router.get('/users/session', (req, res) => {
    res.send(`Body: ${req.body} User: ${req.user}`);
    console.log(req.body);
    console.log(req.user._id);
})



module.exports = router;