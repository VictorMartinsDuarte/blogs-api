const serviceCategory = require('../services/serviceCategory');

const createCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  const newCategory = await serviceCategory.createCategory(name);
  return res.status(201).json(newCategory);
};

module.exports = {
  createCategory,
};