import React from 'react';
import './styles.css';

function Publication({ title, description }) {
    return (
        <div className="publication-item">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Publication;
