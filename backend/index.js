import express from "express";
import mysql from "mysql2"; // Import mysql2 instead of mysql
import dotenv from "dotenv";
import cors from "cors";

// npm start

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

