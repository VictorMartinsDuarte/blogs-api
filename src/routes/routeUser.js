const express = require('express');
const { loginValid } = require('../middlewares/middleLogin');
const { createUser, getAllUsers } = require('../controllers/controllerUser');
const { displayNameValid, emailValid, passwordValid } = require('../middlewares/middleUser');
const { tokenExists, tokenValid } = require('../middlewares/tokenValidation');

const user = express.Router();

user.post('/', loginValid, displayNameValid,
  emailValid, passwordValid, createUser);
user.get('/', tokenExists, tokenValid, getAllUsers);

module.exports = {
  user,
};