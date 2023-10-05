const express = require("express");
const { UserModel } = require("../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const UserRouter = express.Router();

// register

UserRouter.post("/register", async (req, res) => {
  const { username, email, password, age } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        throw err;
      }
      const user = new UserModel({ username, email, age, password: hash });
      await user.save();
      res.status(200).send({ msg: "user registered successfully." });
    });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

// login

UserRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    // console.log(user)
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          throw err;
        }
        let token = jwt.sign({ post: "full_stack" }, "ankush");
        res.status(200).send({ msg: "Login Successfull.", token });
      });
    } else {
      res.status(200).send({ msg: "Wrong Credentials!!!" });
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

module.exports = {
  UserRouter,
};
