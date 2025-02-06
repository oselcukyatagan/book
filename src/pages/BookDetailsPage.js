import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function BookDetailsPage() {
    const { id } = useParams(); // Extract the book ID from the URL
    const [book, setBook] = useState(null); // State to store the book details

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/books/${id}`);
                setBook(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchBook();
    }, [id]); // Re-fetch when the ID changes

    if (!book) {
        return <div>Loading...</div>; // Display a loading message while fetching data
    }

    return (
        <div className="cerceve">
            <div className="book-content">
                <img className="book-content-cover" src={book.cover} alt="Book Cover"/>
                <div className="book-info">
                    <div>
                    <h1>{book.title}</h1>
                    <h2>by {book.author}</h2>
                    </div>
                    <p>{book.description}</p>
                </div>
            </div>
            <button className="book-content-back-button">Turn Back.</button>
        </div>

    );
}