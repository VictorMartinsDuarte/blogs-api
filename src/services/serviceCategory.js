const { Category } = require('../database/models');

const createCategory = async (categoryName) => {
  const newCategory = await Category.create({ name: categoryName });
  return newCategory;
};

const getAllCategories = async () => Category.findAll();

module.exports = {
  createCategory,
  getAllCategories,
};