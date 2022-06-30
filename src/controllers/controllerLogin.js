const serviceLogin = require('../services/serviceLogin');

const getUser = async (req, res) => {
  const userToken = await serviceLogin.getUser(req.body);
  console.log(userToken);
  if (!userToken) return res.status(400).json({ message: 'Invalid fields' });
  return res.status(200).json({ token: userToken });
};

module.exports = { 
  getUser,
};