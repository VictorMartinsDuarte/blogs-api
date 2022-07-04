const servicePost = require('../services/servicePost');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { userId } = req.user;
  
  const newPost = await servicePost.createPost(userId, title, content, categoryIds);
  if (!newPost) return res.status(400).json({ message: '"categoryIds" not found' });

  return res.status(201).json(newPost);
};

module.exports = {
  createPost,
};