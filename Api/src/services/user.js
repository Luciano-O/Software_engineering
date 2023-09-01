const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const statusCodes = require("http-status-codes");

const register = async (data) => {
  const { email, password } = data;

  const encryptedPass = await bcrypt.hash(password, 10);

  const response = await prisma.user.create({
    data: {
      email,
      password: encryptedPass,
    },
  });

  return { response, code: statusCodes.CREATED };
};

const login = async (data) => {
  const { email, password } = data;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return {
      response: { message: "User do not exists" },
      code: statusCodes.BAD_REQUEST,
    };
  }

  if (!(await bcrypt.compare(password, user.password))) {
    return {
      response: { message: "Wrong email or password" },
    };
  }

  return {
    response: {
      email: user.email,
      id: user.id,
    },
    code: statusCodes.OK,
  };
};

const newChat = async (data, id) => {
  const { chats } = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  chats.push(data);

  await prisma.user.update({
    where: {
      id,
    },
    data: {
      chats,
    },
  });

  return {
    code: statusCodes.OK,
    response: {
      message: "Success",
    },
  };
};

const userChats = async (id) => {
  const { chats } = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return {
    response: chats,
    code: statusCodes.OK,
  };
};

module.exports = { register, login, newChat, userChats };
