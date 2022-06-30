const express = require('express');
const { loginValidation } = require('../middlewares/middleLogin');
const { getUser } = require('../controllers/controllerLogin');

const login = express.Router();

login.post('/', loginValidation, getUser);

module.exports = {
  login,
};