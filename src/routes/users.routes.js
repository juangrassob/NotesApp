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




module.exports = router;