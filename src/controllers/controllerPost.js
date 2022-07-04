const servicePost = require('../services/servicePost');
const { getUserId } = require('../utils/getUserId');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const userId = await getUserId(req.headers.authorization);

  const newPost = await servicePost.createPost(title, content, categoryIds, userId);
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
  const userId = await getUserId(req.headers.authorization);

  const updatedPost = await servicePost.updateById(title, content, id, userId);
  if (!updatedPost) return res.status(401).json({ message: 'Unauthorized user' });
  return res.status(200).json(updatedPost);
};

const deletePost = async (req, res) => {
  // try {
    const { id } = req.params;
    const userId = await getUserId(req.headers.authorization);
    const blogPostExists = await servicePost.getById(id);
    if (!blogPostExists) return res.status(404).json({ message: 'Post does not exist' });
    
    const deletedPost = await servicePost.deletePost(id, userId);
    if (!deletedPost) return res.status(401).json({ message: 'Unauthorized user' });
    return res.status(204).end(); 
  // } catch (err) {
  //   return res.status(err.status).json({ message: err.message });
  // }
};

module.exports = {
  createPost,
  getAll,
  getById,
  updateById,
  deletePost,
};