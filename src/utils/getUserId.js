const { decodedToken } = require('./tokenJWT');
const { findPost } = require('../services/servicePost');

const getUserId = async (token) => { 
  const decoded = await decodedToken(token);
  const user = await findPost(decoded.data);
  return user.id;
};

module.exports = {
  getUserId,
};