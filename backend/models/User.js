const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    // Implementing Role-Based Access Control (RBAC)
    role: { type: String, enum: ['Student', 'Trainer', 'Admin'], default: 'Student' },
    subscriptionId: { type: String, default: null },
    progress: { type: Array, default: [] }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);