// imports
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var models = require('./models');

// routes
module.exports = {
    register: function (req, res) {
        // Add implementation for register route

        //params
        var email    = req.body.email;
        var username = req.body.username;
        var password = req.body.password;
        var bio      = req.body.bio;

        if (email == null || username == null || password == null) {
            return res.status(400).json({ 'Erreur': 'parametres manquant'})
        }

        // verifier la taille du pseudo, nail regex, password etc.

        models.User.findOne({
            attributes: ['email'],
            where: {
                email: email
            }
        })
        .then(function(userFound) {
            if (!userFound) {
                bcrypt.hash(password, 5, function(err, bcryptedPassword) {
                  var newUser = models.User.create({
                    email: email,
                    username: username,
                    password: bcryptedPassword,
                    bio: bio,
                    isAdmin: false
                  }) 
                  .then (newUser => {
                    return res.status(201).json({ 'message': 'User created' })
                  })
                });
            } else {
                return res.status(409).json({ 'error': 'User already exists' })
            }
        })
        .catch(function(err) {
            return res.status(500).json({ 'error': 'Unable to verify user' })
        });
    },
    login: function (req, res) {
        // Add implementation for login route
    }
};
