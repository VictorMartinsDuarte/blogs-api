const express = require('express');
const { login } = require('./routeLogin');

const router = express.Router();

router.use('/login', login);

module.exports = {
  router,
};