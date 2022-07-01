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

module.exports = {
  createUser,
  getAllUsers,
};