const userModel = require("../models/userModel");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (!user) {
      return res.status(404).send("user not found");
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};
const registerController = async (req, res) => {
  try {
    let newUser = await new userModel(req.body);
    console.log(newUser);
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send("unable to create user");
  }
};

module.exports = { loginController, registerController };
