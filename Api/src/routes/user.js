const { Router } = require("express");
const User = require("../controllers/user");

const userRouter = Router();

userRouter.post("/register", User.register);
userRouter.get("/login", User.login);
userRouter.put("/newChat/:id", User.newChat);

module.exports = userRouter;
