import React from "react";
import LibData from "../data";
import LibraryCard from "./LibraryCard";

export default function Library(){

    const cards = LibData.map(item => {
        return(
            <LibraryCard
                title={item.title}
                author={item.author}
                cover={item.cover}
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