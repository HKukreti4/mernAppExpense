const express = require("express");

const {
  loginController,
  registerController,
} = require("../controllers/userController");
const routes = express.Router();
//post.login
routes.post("/login", loginController);
// post/register
routes.post("/register", registerController);
module.exports = routes;
