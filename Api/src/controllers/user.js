const User = require("../services/user");

const register = async (req, res) => {
  const data = req.body;

  const { response, code } = await User.register(data);

  res.status(code).json(response);
};

const login = async (req, res) => {
  const data = req.body;

  const { response, code } = await User.login(data);

  res.status(code).json(response);
};

module.exports = { register, login };
