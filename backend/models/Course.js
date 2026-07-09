const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    discipline: {
      type: String,
      required: true,
      enum: [
        "Karate",
        "Muay Thai",
        "Boxing",
        "Brazilian Jiu-Jitsu",
        "MMA",
        "Krav Maga",
      ],
    },

    description: {
      type: String,
      required: true,
    },

    skillLevel: {
      type: String,
      required: true,
      enum: ["Beginner", "Intermediate", "Advanced"],
    },

    durationWeeks: {
      type: Number,
      required: true,
    },

    totalLessons: {
      type: Number,
      required: true,
    },

    subscriptionTier: {
      type: String,
      enum: ["Free", "Basic", "Premium"],
      default: "Free",
    },

    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", courseSchema);