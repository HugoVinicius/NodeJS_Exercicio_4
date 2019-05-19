const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', passport.authenticate('github'));

router.get('/callback', 
passport.authenticate('github', {failureRedirect: '/login'}),
function(req, res){
    res.redirect('/profile');
});

module.exports = router;