import React, { useState } from 'react';
import './styles.css';

function AddNoteForm() {
  const [noteData, setNoteData] = useState({
    title: '',
    module: '',
    keyword: '',
    description: '',
    picture: null
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
    // You can send noteData to your backend for further processing
    console.log(noteData);
    // Reset form after submission
    setNoteData({
      title: '',
      module: '',
      keyword: '',
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
        </div>
        <div>
          <label>Module:</label>
          <input type="text" name="module" value={noteData.module} onChange={handleChange} required/>
        </div>
        <div>
          <label>Keyword:</label>
          <input type="text" name="keyword" value={noteData.keyword} onChange={handleChange} required/>
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={noteData.description} onChange={handleChange} required></textarea>
        </div>
        <div>
          <label>Picture:</label>
          <input type="file" accept="image/*" onChange={handlePictureChange} required/>
        </div>
        <button type="submit">Ajouter Note</button>
      </form>
    </div>
  );
}

export default AddNoteForm;
