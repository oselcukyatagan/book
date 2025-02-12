import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function BookDetailsPage() {
    const { id } = useParams(); // Extract the book ID from the URL
    const [book, setBook] = useState(null); // State to store the book details
    const navigate = useNavigate();

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
    }, [id]);

    if (!book) {
        return <div>Loading...</div>; // Display a loading message while fetching data
    }

    return (
        <div className="book-details-container">
            <div className="book-content">
                <div className="book-media">
                    <img className="book-cover" src={book.cover} alt="Book Cover"/>
                </div>
                <div className="book-info">
                    <div className="book-header">
                        <h1 className="book-title">{book.title}</h1>
                        <h2 className="book-author">by {book.author}</h2>
                    </div>
                    <p className="book-description">{book.description}</p>
                    <button 
                        className="back-button"
                        onClick={() => navigate(`/book/library`)}
                    >
                        ← Back to Collection
                    </button>
                </div>
            </div>
        </div>

    );
}