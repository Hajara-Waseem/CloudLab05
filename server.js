const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the frontend
app.use(express.static(path.join(__dirname, "public")));

// Backend API route
app.get("/api/students", (req, res) => {
    const students = [
        {
            id: 1,
            name: "Ali",
            program: "Software Engineering"
        },
        {
            id: 2,
            name: "Ayesha",
            program: "Computer Science"
        },
        {
            id: 3,
            name: "Hassan",
            program: "Software Engineering"
        }
    ];

    res.json(students);
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});