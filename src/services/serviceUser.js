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

module.exports = {
  createUser,
};