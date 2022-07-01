const serviceLogin = require('../services/serviceLogin');

const getUserToken = async (req, res) => {
  const userToken = await serviceLogin.getUserToken(req.body);
  if (!userToken) return res.status(400).json({ message: 'Invalid fields' });
  return res.status(200).json({ token: userToken });
};

module.exports = { 
  getUserToken,
};