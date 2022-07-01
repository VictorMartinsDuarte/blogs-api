const jwt = require('jsonwebtoken');

const JWT_CONFIG = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const tokenJWT = async (email) => {
  const token = jwt.sign({ data: email }, process.env.JWT_SECRET, JWT_CONFIG);
  return token;
};

module.exports = {
  tokenJWT,
};