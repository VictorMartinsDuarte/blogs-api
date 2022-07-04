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

const getAll = async (_req, res) => {
  const post = await servicePost.getAll();
  return res.status(200).json(post);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const postById = await servicePost.getById(id);
  if (!postById) return res.status(404).json({ message: 'Post does not exist' });
  return res.status(200).json(postById);
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  console.log(req.user);
  const token = req.headers.authorization;
 
  const decoded = await decodedToken(token);
  const user = await servicePost.findPost(decoded.data);

  const updatedPost = await servicePost.updateById(title, content, id, user.id);
  if (!updatedPost) return res.status(401).json({ message: 'Unauthorized user' });
  return res.status(200).json(updatedPost);
};

module.exports = {
  createPost,
  getAll,
  getById,
  updateById,
};