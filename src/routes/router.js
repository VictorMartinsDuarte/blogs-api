const express = require('express');
const { login } = require('./routeLogin');
const { user } = require('./routeUser');
const { category } = require('./routeCategory');

const router = express.Router();

router.use('/login', login);
router.use('/user', user);
router.use('/categories', category);

module.exports = {
  router,
};