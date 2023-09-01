const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

const register = async (data) => {
  const { email, password } = data;

  const encryptedPass = await bcrypt.hash(password, 10);

  const movie = await prisma.user.create({
    data: {
      email,
      password: encryptedPass,
    },
  });

  return movie;
};

module.exports = { register };
