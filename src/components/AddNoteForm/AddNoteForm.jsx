

// export default AddNoteForm;
import React, { useState } from 'react';
import './styles.css';

function AddNoteForm() {
  const [noteData, setNoteData] = useState({
    title: '',
    module: '',
    keywords: '',
    description: '',
    picture: null
  });
  const [errorMessages, setErrorMessages] = useState({
    title: '',
    module: '',
    description: '',
    keywords: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNoteData({
      ...noteData,
      [name]: value
    });
  };

  const handlePictureChange = (e) => {
    const pictureFile = e.target.files[0];
    setNoteData({
      ...noteData,
      picture: pictureFile
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const titlePattern = /^[a-zA-Z][a-zA-Z\s]*$/;
    if (!titlePattern.test(noteData.title)) {
      setErrorMessages({ ...errorMessages, title: "Titre invalide" });
      return;
    } else {
      setErrorMessages({ ...errorMessages, title: '' });
    }

    const modulePattern = /^[a-zA-Z][a-zA-Z\s]*$/;
    if (!modulePattern.test(noteData.module)) {
      setErrorMessages({ ...errorMessages, module: "Module invalide" });
      return;
    } else {
      setErrorMessages({ ...errorMessages, module: '' });
    }

    const descriptionPattern = /^[a-zA-Z][a-zA-Z\s]*$/;
    if (!descriptionPattern.test(noteData.description)) {
      setErrorMessages({ ...errorMessages, description: "Description invalide" });
      return;
    } else {
      setErrorMessages({ ...errorMessages, description: '' });
    }

    // Vérification des mots-clés
    const keywordsPattern = /^[a-zA-Z0-9\s]+(?:;[a-zA-Z0-9\s]+)*$/; // Expression régulière pour valider les mots-clés
    if (!keywordsPattern.test(noteData.keywords)) {
      setErrorMessages({ ...errorMessages, keywords: "Veuillez entrer les mots-clés séparés par des points-virgules." });
      return;
    } else {
      setErrorMessages({ ...errorMessages, keywords: '' });
    }

    // You can send noteData to your backend for further processing
    const keywordsArray = noteData.keywords.split(';').map(keyword => keyword.trim());
    console.log(noteData);

    // Reset form after submission
    setNoteData({
      title: '',
      module: '',
      keywords: '',
      description: '',
      picture: null
    });
  };

  return (
    <div className='form-container'>
      <h2>Add Note</h2>
    
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={noteData.title} onChange={handleChange} required/>
          {errorMessages.title && <div className="error-message">{errorMessages.title}</div>}
        </div>
        <div>
          <label>Module:</label>
          <input type="text" name="module" value={noteData.module} onChange={handleChange} required/>
          {errorMessages.module && <div className="error-message">{errorMessages.module}</div>}
        </div>
        <div>
          <label>Keywords:</label>
          <input type="text" name="keywords" value={noteData.keywords} onChange={handleChange} required/>
          {errorMessages.keywords && <div className="error-message">{errorMessages.keywords}</div>}
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={noteData.description} onChange={handleChange} required></textarea>
          {errorMessages.description && <div className="error-message">{errorMessages.description}</div>}
        </div>
        <div>
          <label>Picture:</label>
          <input type="file" accept=".jpg,.jpeg,.png,.svg,.webp,.tiff" onChange={handlePictureChange} required/>
        </div>
        <button type="submit">Ajouter Note</button>
      </form>
    </div>
  );
}

export default AddNoteForm;
