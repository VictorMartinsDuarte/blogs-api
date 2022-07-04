const express = require('express');
const { tokenExists, tokenValid } = require('../middlewares/tokenValidation');
const { postValid } = require('../middlewares/middlePost');
const { createPost } = require('../controllers/controllerPost');

const post = express.Router();

post.post('/', tokenExists, tokenValid, postValid, createPost);

module.exports = {
  post,
};