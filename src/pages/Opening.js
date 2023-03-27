import React, { useState, useEffect } from "react";
import "../opening.css"
import {Link} from "react-router-dom"

export default function Opening(){
    // function TextWriter({ text, interval }) {
    //     const [currentText, setCurrentText] = useState("");
    //     const [index, setIndex] = useState(0);
    //
    //     useEffect(() => {
    //         const timer = setInterval(() => {
    //             if (index >= text.length) {
    //                 clearInterval(timer);
    //             } else {
    //                 setCurrentText((prevText) => prevText + text[index]);
    //                 setIndex((prevIndex) => prevIndex + 1);
    //             }
    //         }, interval);
    //
    //         return () => clearInterval(timer);
    //     }, [index, interval, text]);
    //
    //     return <div>{currentText}</div>;
    // }

    // <TextWriter text="Hello, world!" interval={100} />

    return(
        <div className="opening">
            <div className="sidebar-logo">
                <Link to="/library"><h1>ReadBook</h1></Link>
            </div>
        </div>
    )
}