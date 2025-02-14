import "../opening.css"
import {Link} from "react-router-dom"
import React from "react";


export default function OpeningPage(){

    return(

        <>
            <img src="/images/library-hero.jpg" className="hero-bg" alt="img"/>
            <div className="hero">
                <div className="hero-text">
                    <h1>SHARE YOUR READING EXPERIENCE</h1>
                    <p>
                        Reading books together is more fun. ReadBook makes it easier to share your library with
                        your friends. Add your friends, see what they are reading.
                    </p>
                </div>


                <div className="opening-logo">
                    <Link to="/library"><h1>ReadBook</h1></Link>
                </div>
            </div>
        </>
    )
}