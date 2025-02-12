import express from "express";
import mysql from "mysql2"; // Import mysql2 instead of mysql
import dotenv from "dotenv";
import cors from "cors";


/*
run npm start to start the server.

intalled dotenv to mask the username and password.

installed cors to not get sql errors




*/


dotenv.config(); // Load environment variables from .env file

const app = express();

// Create a connection using mysql2
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

app.use(express.json());
app.use(cors())

// Start the server
app.listen(8800, () => {
    console.log("Backend is running.");
});

// Greet route
function backendGreet(req, res) {
    res.json("hi there");
}
app.get("/", backendGreet);

// GetBooks route
function GetBooks(req, res) {
    const MyQuery = "SELECT * FROM books";
    db.query(MyQuery, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
}
app.get("/books", GetBooks);

// Get a single book by ID
function GetBookById(req, res) {
    const bookId = req.params.id; // Extract the book ID from the URL
    const MyQuery = "SELECT * FROM books WHERE id = ?"; // Query to fetch a single book

    db.query(MyQuery, [bookId], (err, data) => {
        if (err) return res.json(err); // Handle errors
        if (data.length === 0) return res.status(404).json({ message: "Book not found" }); // Handle case where no book is found
        return res.json(data[0]); // Return the first (and only) book in the result
    });
}

// Add the new route
app.get("/books/:id", GetBookById);