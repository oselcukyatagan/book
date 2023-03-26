import React from "react";
import {AiFillHeart, AiFillSetting, AiOutlineLogout} from "react-icons/ai"
import {FaBookOpen,FaBook} from "react-icons/fa"
import {Link} from "react-router-dom"

export default function Sidebar(){
    return(

        <div className="sidebar">

            <div className="sidebar-logo">
                <Link to="/"><h1>ReadBook</h1></Link>
            </div>

            <div className="sidebar-main">
                <ul className="sidebar-content">
                    <li className="sidebar-item">
                        <Link to="/library"><FaBookOpen size="2rem"/>
                            <span style={{marginLeft : "1rem"}}>Library</span>
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link to="/will-read"><FaBook size="2rem"/>
                            <span style={{marginLeft : "1rem"}}>Will Read</span>
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link to="/favorites"><AiFillHeart size="2rem"/>
                            <span style={{marginLeft : "1rem"}}>Favorites</span>
                        </Link>
                    </li>
                </ul>
             </div>
            <div className="sidebar-buttons">
                    <button ><AiFillSetting size="2rem" style={{marginRight:"0.42rem"}}/>Settings</button>
                    <button ><AiOutlineLogout size="2rem" style={{marginRight:"0.42rem"}}/>Log Out</button>
            </div>


        </div>
    )
}