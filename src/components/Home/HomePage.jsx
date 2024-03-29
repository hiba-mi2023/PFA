import React from 'react';
import Header from './Header';
import Publication from './Publication';
import AddNoteButton from './AddNoteButton';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function HomePage() {
    return (
        <div>
            <Header />
            <div className="container">
            <input type="text" className="search-bar" placeholder="Rechercher..." />
                <h1>Publications</h1>
                <div className="publication">
                    {/* Exemple de publication */}
                    <Publication title="Titre de la note" description="Description de la note." />
                </div>
                {/* Use Link to navigate to the add note page */}
                <Link to="/add-note">
                    <AddNoteButton />
                </Link>
            </div>
        </div>
    );
}

export default HomePage;
