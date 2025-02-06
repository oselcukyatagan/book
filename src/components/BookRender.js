import React from "react";
import LibData from "../data";
import LibraryCard from "./LibraryCard";

export default function BookRender(){

    const [cardData,setCardData] = React.useState(LibData)


    function toggle(id){
        setCardData(prevState => {
            const newCardData = []
            for(let i = 0; i < cardData.length; i++){
                const currentCard = cardData[i]
                if(currentCard.id === id){
                    const updatedCard = {
                        ...currentCard,
                        isFavorite: !currentCard.isFavorite
                    }
                    newCardData.push(updatedCard)
                }
                else{
                    newCardData.push(currentCard)
                }
            }
        return newCardData

        })
    }

    const cards = cardData.map(item => {
        return(
            <LibraryCard
                title={item.title}
                author={item.author}
                cover={item.cover}
                id={item.id}
                isFavorite={item.isFavorite}
                handleClick={toggle}
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

