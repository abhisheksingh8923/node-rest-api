const express = require("express");
const mongoose = require("mongoose");
const coursesRouter = require("./routes/courses");
require("dotenv").config();

const app = express();


app.use(express.json());


app.use("/c", coursesRouter);


mongoose
    .connect(process.env.DB_CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to the database.");
    })
    .catch((err) => {
        console.error("Database connection error:", err.message);
    });

// Root Route
app.get("/", (req, res) => {
    res.send("helloworldjjn");
});

// Start the Server
const PORT = process.env.PORT || 3000; // Default port fallback
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
