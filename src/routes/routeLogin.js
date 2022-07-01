const express = require('express');
const { loginValid } = require('../middlewares/middleLogin');
const { getUserToken } = require('../controllers/controllerLogin');

const login = express.Router();

login.post('/', loginValid, getUserToken);

module.exports = {
  login,
};