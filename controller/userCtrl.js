const User = require("../models/userModel");

const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } else {
    throw new Error("User Already Exists");
  }
});

const loginUserCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.isPasswordMatched(password))) {
    res.json({userFind:true,success:true});
  }
else{
    throw new Error("Invalid Credentials");
}

});

module.exports = { createUser, loginUserCtrl };
