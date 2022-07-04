const servicePost = require('../services/servicePost');
const { decodedToken } = require('../utils/tokenJWT');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const token = req.headers.authorization;
 
  const decoded = await decodedToken(token);
  const user = await servicePost.findPost(decoded.data);

  const newPost = await servicePost.createPost(title, content, categoryIds, user.id);
  if (!newPost) return res.status(400).json({ message: '"categoryIds" not found' });
  return res.status(201).json(newPost);
};

module.exports = {
  createPost,
};