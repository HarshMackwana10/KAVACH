const express = require("express");
const Course = require("../models/Course");

const router = express.Router();

// ==========================================
// GET ALL PUBLISHED COURSES
// Route: GET /api/courses
// ==========================================
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find({ isPublished: true });

    res.status(200).json({
      message: "Courses fetched successfully",
      count: courses.length,
      courses,
    });
  } catch (error) {
    console.error("Fetch courses error:", error);

    res.status(500).json({
      message: "Server error while fetching courses",
    });
  }
});

// ==========================================
// GET SINGLE COURSE BY ID
// Route: GET /api/courses/:id
// ==========================================
router.get("/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    res.status(200).json({
      message: "Course fetched successfully",
      course,
    });
  } catch (error) {
    console.error("Fetch course error:", error);

    res.status(400).json({
      message: "Invalid course ID",
    });
  }
});

// ==========================================
// CREATE NEW COURSE
// Route: POST /api/courses
// ==========================================
router.post("/", async (req, res) => {
  try {
    const {
      title,
      discipline,
      description,
      skillLevel,
      durationWeeks,
      totalLessons,
      subscriptionTier,
    } = req.body;

    if (
      !title ||
      !discipline ||
      !description ||
      !skillLevel ||
      !durationWeeks ||
      !totalLessons
    ) {
      return res.status(400).json({
        message: "Please provide all required course fields",
      });
    }

    const course = new Course({
      title,
      discipline,
      description,
      skillLevel,
      durationWeeks,
      totalLessons,
      subscriptionTier: subscriptionTier || "Free",
    });

    await course.save();

    res.status(201).json({
      message: "Course created successfully",
      course,
    });
  } catch (error) {
    console.error("Create course error:", error);

    res.status(500).json({
      message: "Server error while creating course",
      error: error.message,
    });
  }
});

// ==========================================
// DELETE COURSE BY ID
// Route: DELETE /api/courses/:id
// ==========================================
router.delete("/:id", async (req, res) => {
  try {
    const deletedCourse = await Course.findByIdAndDelete(req.params.id);

    if (!deletedCourse) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    res.status(200).json({
      message: "Course deleted successfully",
      course: deletedCourse,
    });
  } catch (error) {
    console.error("Delete course error:", error);

    res.status(400).json({
      message: "Invalid course ID",
    });
  }
});

// ==========================================
// UPDATE COURSE BY ID
// Route: PUT /api/courses/:id
// ==========================================
router.put("/:id", async (req, res) => {
  try {
    const {
      title,
      discipline,
      description,
      skillLevel,
      durationWeeks,
      totalLessons,
      subscriptionTier,
      isPublished,
    } = req.body;

    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      {
        title,
        discipline,
        description,
        skillLevel,
        durationWeeks,
        totalLessons,
        subscriptionTier,
        isPublished,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedCourse) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    res.status(200).json({
      message: "Course updated successfully",
      course: updatedCourse,
    });
  } catch (error) {
    console.error("Update course error:", error);

    res.status(400).json({
      message: "Error while updating course",
      error: error.message,
    });
  }
});

module.exports = router;