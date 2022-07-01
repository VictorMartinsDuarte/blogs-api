const express = require('express');
const { createCategory, getAllCategories } = require('../controllers/controllerCategory');
const { tokenExists, tokenValid } = require('../middlewares/tokenValidation');

const category = express.Router();

category.post('/', tokenExists, tokenValid, createCategory);
category.get('/', tokenExists, tokenValid, getAllCategories);

module.exports = {
  category,
};