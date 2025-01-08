const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true, // 'require' should be 'required'
    },
    content: {
        type: String,
        required: true, // 'require' should be 'required'
    },
    videos: {
        type: Number,
        required: true, // 'require' should be 'required'
    },
    active: {
        type: Boolean, // Optional field
    },
});

module.exports = mongoose.model("Course", courseSchema); // Use 'courseSchema' and model name 'Course'
