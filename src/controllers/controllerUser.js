const serviceUser = require('../services/serviceUser');

const createUser = async (req, res) => {
  const userToken = await serviceUser.createUser(req.body);
  if (!userToken) return res.status(409).json({ message: 'User already registered' });

  return res.status(201).json({ token: userToken });
};

const getAllUsers = async (_req, res) => {
  const allUsers = await serviceUser.getAllUsers();
  return res.status(200).json(allUsers);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const foundUser = await serviceUser.getUserById(id);
  if (!foundUser) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(foundUser);
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};