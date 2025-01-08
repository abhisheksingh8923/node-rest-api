const express = require("express");
const Course = require("../models/course");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (err) {
        res.status(500).json({ message: "Error fetching courses", error: err });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }
        res.json(course);
    } catch (err) {
        res.status(500).json({ message: "Error fetching the course", error: err });
    }
});

// Create a new course
router.post("/", async (req, res) => {
    try {
        const { title, content, videos, active } = req.body;
        const newCourse = new Course({ title, content, videos, active });
        await newCourse.save();
        res.status(201).json(newCourse);  // Return the created course
    } catch (err) {
        res.status(400).json({ message: "Error creating course", error: err });
    }
});

// Update a course
router.put("/:id", async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }
        res.json(course);
    } catch (err) {
        res.status(400).json({ message: "Error updating course", error: err });
    }
});

// Delete a course
router.delete("/:id", async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }
        res.json({ message: "Course deleted" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting course", error: err });
    }
});

module.exports = router;
