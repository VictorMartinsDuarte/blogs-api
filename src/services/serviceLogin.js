const { User } = require('../database/models');
const { tokenJWT } = require('../utils/tokenJWT');

const getUserToken = async ({ email, password }) => {
  const foundUser = await User.findOne({ where: { email, password } });
  const token = tokenJWT(email);

  if (!foundUser) return undefined;
  return token;
};

module.exports = {
  getUserToken,
};