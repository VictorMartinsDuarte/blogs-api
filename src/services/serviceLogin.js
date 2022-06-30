const User = require('../database/models/user');
const { tokenJWT } = require('../utils/tokenJWT');

const getUser = async ({ email, password }) => {
  const foundUser = await User.findOne({ where: { email, password } });
  const token = tokenJWT(email);

  if (!foundUser) return undefined;
  return token;
};

module.exports = {
  getUser,
};