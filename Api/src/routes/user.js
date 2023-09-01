const { Router } = require("express");
const User = require("../controllers/user");

const userRouter = Router();

userRouter.post("/register", User.register);

module.exports = userRouter;
