import React from "react"

export default function LibraryCard(props){

    let url = props.isFavorite ? "star-filled.png" : "star-empty.png"
    console.log(`../images/${url}`)

    return(

        <div className="card">

            {/* <img
                src={`images/${url}`}
                alt="favoriteIcon"
                className="favorite-icon"
                // onClick={() => props.handleClick(props.id)}
            />
            */}

            <img className="card-image" src={props.cover} alt="coverImage"/>





        </div>

    )
}