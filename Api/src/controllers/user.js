const User = require("../services/user");

const register = async (req, res) => {
  const data = req.body;

  const response = await User.register(data);

  res.status(401).json(response);
};

module.exports = { register };
