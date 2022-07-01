const express = require('express');
const { createCategory } = require('../controllers/controllerCategory');
const { tokenExists, tokenValid } = require('../middlewares/tokenValidation');

const category = express.Router();

category.post('/', tokenExists, tokenValid, createCategory);

module.exports = {
  category,
};