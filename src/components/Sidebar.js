import React from "react";
import {AiFillHeart, AiFillSetting, AiOutlineLogout} from "react-icons/ai"
import {FaBookOpen,FaBook} from "react-icons/fa"

export default function Sidebar(){
    return(

        <div className="sidebar">

            <div className="sidebar-logo">
                <h1>ReadBook</h1>
            </div>

            <div className="sidebar-main">
                <ul className="sidebar-content">
                    <li className="sidebar-item">
                        <a href="/"><FaBookOpen size="2rem"/>
                            <span style={{marginLeft : "1rem"}}>Library</span>
                        </a>
                    </li >
                    <li className="sidebar-item">
                        <a href="/"><FaBook size="2rem"/>
                            <span style={{marginLeft : "1rem"}}>Will Read</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="/"><AiFillHeart size="2rem"/>
                            <span style={{marginLeft : "1rem"}}>Favorites</span>
                        </a>
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