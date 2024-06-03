const express = require("express");
const router = express.Router();
const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodeMailer = require("nodemailer");
//signup
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email }); // Check if user already exists
    if (existingUser) {
      return res.status(400).send("User already registered");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({
      email,
      username,
      password: hashedPassword,
    });
    await user.save();
    return res.status(200).send("ok");
    // res.send("User Registered Successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  }
});

//login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email }); // Check if user exists
    if (!existingUser) {
      return res.status(400).send("User not registered");
    }
    const passwordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!passwordCorrect) {
      return res.status(400).send("Invalid credentials provided");
    }
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });
    res.status(200).json({ message: "ok", result: existingUser, token });
  } catch (err) {
    console.error(err);
    res.status(500).send("haha.....  Something went wrong");
  }
});

// password reset
router.post("/reset", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email }); // Check if user exists
    if (!existingUser) {
      return res.status(400).send("User not registered");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    await User.findOneAndUpdate({ email }, { password: hashedPassword });
    res.status(200).send("Password reset successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  }
});

//logout

router.get("/logout", async (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
    secure: true,
  });
  res.send("Logged out successfully");
});

module.exports = router;
