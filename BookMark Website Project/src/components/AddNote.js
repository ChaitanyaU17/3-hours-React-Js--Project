import React, { useState, useContext, useEffect } from 'react'
import classes from './AddNote.module.css';
import NoteContext from './NoteContext';

const AddNote = () => {

  const {addNote, editNote, notes, showAddNote, setShowAddNote, editNoteId} = useContext(NoteContext);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editNoteId) {
      const noteToEdit = notes.find((note) => note.id === editNoteId);
      if (noteToEdit) {
        setTitle(noteToEdit.title);
        setDescription(noteToEdit.description);
      }
    }
  }, [editNoteId, notes])

  const handleAddOrUpdateNote = (event) => {
    event.preventDefault();
    if(editNoteId) {
      editNote(editNoteId, title, description);
    } else {
      addNote(title, description);
    }
    setTitle('');
    setDescription('');
    setShowAddNote(false);
  }

  if (!showAddNote) {
    return null;
  }

  return (
    <div className={classes.add}>
      <h1>Add New Note</h1>
      <div>
        <label>
          Note Title: <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <p>
          Note Desc: <textarea value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
        </p>
      </div>
      <div>
      <button 
      className={classes.btn1}
      onClick={handleAddOrUpdateNote}
      > 
      {editNoteId ? "update" : "Add to Note"}
      </button>
      <button className={classes.btn2} onClick={() => setShowAddNote(false)}>
        Close
      </button>
      </div>
    </div>
  );
}

export default AddNote
