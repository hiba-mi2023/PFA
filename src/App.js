import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/Home/HomePage';
import AddNotePage from './components/AddNoteForm/AddNotePage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-note" element={<AddNotePage />} />
        </Routes>
    );
}

export default App;
