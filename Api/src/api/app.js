const express = require("express");
const userRouter = require("../routes/user");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(userRouter);

module.exports = app;
