const express = require("express");
const router = express.Router();
const Users = require("../models/UsersModel");
const bcrypt = require("bcrypt");
const { validateToken, validateTokenAdmin } = require("../config/auth");

// GET ALL USERS (admin only)
router.get("/all", validateTokenAdmin, async (req, res) => {
    try {
        const users = await Users.find().select("-password"); // exclude passwords
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ADD USER (admin only)
router.post("/add", validateTokenAdmin, async (req, res) => {
    try {
        const { name, email, phone, password, role, address } = req.body;

        if (!name || !email || !phone || !password) {
            return res.status(400).json({ message: "All fields required" });
        }

        if (await Users.findOne({ email })) {
            return res.status(409).json({ message: `User with ${email} already exists!` });
        }
        if (await Users.findOne({ phone })) {
            return res.status(409).json({ message: `User with ${phone} already exists!` });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new Users({ name, email, phone, role, password: hashedPassword, address });
        await newUser.save();

        const userResponse = newUser.toObject();
        delete userResponse.password;

        res.status(201).json(userResponse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
// Other routes (edit, resetpassword, delete) also should use validateToken or validateTokenAdmin
