const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// ==========================================
// REGISTER USER
// Route: POST /api/auth/register
// ==========================================
router.post("/register", async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // 1. Check if the user already exists in the database
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // 2. Hash the password with bcrypt
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        // 3. Create the new user with the specified role
        user = new User({
            name,
            email,
            passwordHash,
            role: role || "Student"
        });

        // 4. Save user to MongoDB
        await user.save();

        // 5. Send success response
        res.status(201).json({
            message: "User registered successfully"
        });

    } catch (error) {
        console.error("Registration error:", error);

        res.status(500).json({
            message: "Server Error"
        });
    }
});

// ==========================================
// LOGIN USER
// Route: POST /api/auth/login
// ==========================================
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Invalid credentials"
            });
        }

        // 2. Compare entered password with saved password hash
        const isMatch = await bcrypt.compare(
            password,
            user.passwordHash
        );

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid credentials"
            });
        }

        // 3. Create JWT payload
        const payload = {
            userId: user._id,
            role: user.role
        };

        // 4. Generate JWT token
        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET || "fallback_secret",
            {
                expiresIn: "1d"
            }
        );

        // 5. Send login success response
        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        console.error("Login error:", error);

        res.status(500).json({
            message: "Server Error"
        });
    }
});

// Export router
module.exports = router;