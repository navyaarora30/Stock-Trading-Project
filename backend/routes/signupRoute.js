const express = require("express");
const router = express.Router();
const { UserModel } = require("../model/UserModel");

// Signup POST route
router.post("/signup", async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;

    if (!name || !email || !mobile || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "Email already registered" });
    }

    const newUser = new UserModel({ name, email, mobile, password });
    await newUser.save();
    return res.status(201).json({ message: "Signup successful!" });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
