import React from "react"

export default function LibraryCard(props){

    return(

        <div className="card">
            <img className="card-image" src={props.cover} alt="coverImage"></img>
            <h1>{props.title}</h1>
            <h1>{props.author}</h1>
        </div>

    )
}