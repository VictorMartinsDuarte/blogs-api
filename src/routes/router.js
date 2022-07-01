const express = require('express');
const { login } = require('./routeLogin');
const { user } = require('./routeUser');

const router = express.Router();

router.use('/login', login);
router.use('/user', user);

module.exports = {
  router,
};