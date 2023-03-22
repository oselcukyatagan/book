import React from "react";
import "./App.css"
import Sidebar from "./components/Sidebar";
import LibraryCard from "./components/LibraryCard";
import LibData from "./data"


function App() {

    const cards = LibData.map(item => {
        return(
            <LibraryCard
                title={item.title}
                author={item.author}
                cover={item.cover}
            />
        )
    })

  return (
    <div className="App">
        <Sidebar />
        <div className="last-read">
            <h1>Last Read</h1>
            <div className="card-holder">
                {cards}
            </div>
        </div>
    </div>
  );
}

export default App;
