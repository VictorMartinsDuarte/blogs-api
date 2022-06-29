const { User } = require('../database/models/user');

const getUser = async ({ email, password }) => {
  const foundUser = await User.findOne({ where: { email, password } });
  if (!foundUser) {
    return { }
  }
};

module.exports = getUser;