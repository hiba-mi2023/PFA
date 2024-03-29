import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

function AddNoteButton() {
    return (
        <Link to="/add-note" className="add-note-btn">+</Link>
    );
}

export default AddNoteButton;
