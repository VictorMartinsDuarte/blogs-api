const express = require('express');
const { loginValid } = require('../middlewares/middleLogin');
const { createUser } = require('../controllers/controllerUser');
const { displayNameValid, emailValid, passwordValid } = require('../middlewares/middleUser');

const user = express.Router();

user.post('/', loginValid, displayNameValid,
  emailValid, passwordValid, createUser); 
module.exports = {
  user,
};