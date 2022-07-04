const express = require('express');
const { createPost } = require('../controllers/controllerPost');
const { tokenExists, tokenValid } = require('../middlewares/tokenValidation');
const { postValid } = require('../middlewares/middlePost');

const post = express.Router();

post.post('/', tokenExists, tokenValid, postValid, createPost);

module.exports = {
  post,
};