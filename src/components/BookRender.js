import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


export default function BookRender(){

    const [books, setBooks] = useState([]);
    const navigate = useNavigate(); // Hook for navigation

    useEffect( () => {
        const fetchBooks = async () => {
            try{
                const res = await axios.get("http://localhost:8800/books")
                setBooks(res.data)
                console.log(res)
            }catch (err){
                console.log(err)
            }
        }
        fetchBooks()
    },[])

    const handleBookClick = (id) => {
        // Navigate to the BookDetailsPage with the book ID
        navigate(`/book/${id}`);
    };


    const cards = books.map(item => {
        return (
            <div
                key={item.id} // Add a unique key for each card
                className="card"
                onClick={() => handleBookClick(item.id)} // Add onClick handler
            >
                <img className="card-image" src={item.cover} alt="coverImage"/>
                <h3>{item.title}</h3>
                <p>{item.author}</p>
            </div>
        )
    })

    return (
        <div>
            <h1 style={{marginLeft: "2rem"}}>Library</h1>
            <div className="card-holder">
                {cards}
            </div>
        </div>
    )
}

