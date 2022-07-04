const express = require('express');
const { tokenExists, tokenValid } = require('../middlewares/tokenValidation');
const { titleContentValid, categoryIdsValid } = require('../middlewares/middlePost');
const { createPost, getAll, getById,
  updateById, deletePost } = require('../controllers/controllerPost');

const post = express.Router();

post.post('/', tokenExists, tokenValid,
  titleContentValid, categoryIdsValid, createPost);
post.get('/', tokenExists, tokenValid, getAll);
post.get('/:id', tokenExists, tokenValid, getById);
post.put('/:id', tokenExists, tokenValid, titleContentValid, updateById);
post.delete('/:id', tokenExists, tokenValid, deletePost);

module.exports = {
  post,
};