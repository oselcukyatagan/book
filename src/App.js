import React from "react";
import "./App.css"
import {Routes, Route} from "react-router-dom"
import Opening from "./pages/Opening"
import Library from "./pages/Library"
import WillRead from "./pages/WillRead"
import Favorites from "./pages/Favorites"

function App() {

  return (
    <Routes>
        <Route path="/" element={<Opening/>}/>
        <Route path="/library" element={<Library/>}/>
        <Route path="/will-read" element={<WillRead/>}/>
        <Route path="/favorites" element={<Favorites/>}/>

    </Routes>
  );
}

export default App;
