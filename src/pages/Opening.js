import React from "react"
import {Link} from "react-router-dom";
import {FaBookOpen} from "react-icons/fa";

export default function Opening(){
    return(
        <div className="App">
            <h1>Hi Mom!</h1>
            <ul className="sidebar-content">
                <li className="sidebar-item">
                    <Link to="/library"><FaBookOpen size="2rem"/>
                        <span style={{marginLeft : "1rem"}}>Library</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}