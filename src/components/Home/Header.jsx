import React from 'react';
import './styles.css';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="logo">Logo</div>
                <div className="user-icon">Icône utilisateur</div>
                <div className="notification-bell">Cloche de notification</div>
                
            </div>
        </header>
    );
}

export default Header;
