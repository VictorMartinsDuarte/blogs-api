const { User } = require('../database/models');
const { tokenJWT } = require('../utils/tokenJWT');

const createUser = async ({ displayName, email, password, image }) => {
  const foundUser = await User.findOne({ where: { email } });
  if (foundUser) return undefined;

  await User.create({
    displayName,
    email,
    password,
    image,
  });

  const token = tokenJWT(email);
  return token;
};

const getAllUsers = async () => User.findAll({ attributes: { exclude: ['password'] } });

const getUserById = async (id) => {
  const foundUser = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!foundUser) return undefined;
  return foundUser;
};

const deleteUser = async (id) => {
  await User.destroy({ where: { id } });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
};