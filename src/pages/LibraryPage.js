import Sidebar from "../components/Sidebar";
import BookRender from "../components/BookRender";
import React from "react";

export default function LibraryPage() {

    return(
        <div className="App">
            <Sidebar/>
            <BookRender/>
        </div>
    )
}