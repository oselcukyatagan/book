import React, {useEffect, useState} from "react";
import LibData from "../data";
import LibraryCard from "./LibraryCard";
import {useFetcher} from "react-router-dom";
import axios from "axios";


export default function BookRender(){

    const [books, setBooks] = useState([]);

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


    const cards = books.map(item => {
        return(
            <LibraryCard
                title={item.title}
                author={item.author}
                cover={item.cover}
                id={item.id}
            />
        )
    })

    return(
        <div>
            <h1 style={{marginLeft: "2rem"}}>Library</h1>
            <div className="card-holder">
                {cards}
            </div>
        </div>
    )
}

