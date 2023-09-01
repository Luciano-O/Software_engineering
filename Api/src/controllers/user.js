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

const newChat = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const { code, response } = await User.newChat(data, id);

  res.status(code).json(response);
};

const userChats = async (req, res) => {
  const { id } = req.params;

  const { code, response } = await User.userChats(id);

  res.status(code).json(response);
};

module.exports = { register, login, newChat, userChats };
