const jwt = require('jsonwebtoken');

const JWT_CONFIG = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const tokenJWT = async (email) => {
  const token = jwt.sign({ data: email }, process.env.JWT_SECRET, JWT_CONFIG);
  return token;
};

const decodedToken = async (token) => {
  const decoded = jwt.decode(token, process.env.JWT_SECRET, JWT_CONFIG.algorithm);
  return decoded;
};

module.exports = {
  JWT_CONFIG,
  tokenJWT,
  decodedToken,
};