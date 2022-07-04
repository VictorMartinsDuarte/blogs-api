const express = require('express');
const { tokenExists, tokenValid } = require('../middlewares/tokenValidation');
const { postValid } = require('../middlewares/middlePost');
const { createPost, getAll } = require('../controllers/controllerPost');

const post = express.Router();

post.post('/', tokenExists, tokenValid, postValid, createPost);
post.get('/', tokenExists, tokenValid, getAll);

module.exports = {
  post,
};