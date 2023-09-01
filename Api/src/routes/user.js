const { Router } = require("express");
const User = require("../controllers/user");

const userRouter = Router();

userRouter.post("/register", User.register);
userRouter.post("/login", User.login);
userRouter.put("/newChat/:id", User.newChat);
userRouter.get("/chats/:id", User.userChats);

module.exports = userRouter;
