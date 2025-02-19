import React from "react";
import "./App.css"
import {Routes, Route} from "react-router-dom"
import OpeningPage from "./pages/OpeningPage"
import LibraryPage from "./pages/LibraryPage"
import WillReadPage from "./pages/WillReadPage"
import FavoritesPage from "./pages/FavoritesPage"
import BookDetailsPage from "./pages/BookDetailsPage";



function App() {

  return (
    <Routes>
        <Route path="/" element={<OpeningPage/>}/>
        <Route path="/library" element={<LibraryPage/>}/>
        <Route path="/book/:id" element={<BookDetailsPage/>} />
        <Route path="/will-read" element={<WillReadPage/>}/>
        <Route path="/favorites" element={<FavoritesPage/>}/>
    </Routes>
  );
}

export default App;
