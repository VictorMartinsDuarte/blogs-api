const express = require('express');
const { login } = require('./routeLogin');
const { user } = require('./routeUser');
const { category } = require('./routeCategory');
const { post } = require('./routePost');

const router = express.Router();

router.use('/login', login);
router.use('/user', user);
router.use('/categories', category);
router.use('/post', post);

module.exports = {
  router,
};