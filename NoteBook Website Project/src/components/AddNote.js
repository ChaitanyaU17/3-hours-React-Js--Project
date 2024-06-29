import React, { useContext, useState, useEffect } from "react";
import classes from "./AddNote.module.css";
import NoteContext from "./NoteContext";

const AddNote = () => {
  const { addNote, editNote, setShowAddNote, showAddNote, editNoteId, notes } = useContext(NoteContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editNoteId) {
      const noteToEdit = notes.find(note => note.id === editNoteId);
      if (noteToEdit) {
        setTitle(noteToEdit.title);
        setDescription(noteToEdit.description);
      }
    }
  }, [editNoteId, notes]);

  const handleAddOrUpdateNote = (event) => {
    event.preventDefault();
    if (editNoteId) {
      editNote(editNoteId, title, description);
    } else {
      addNote(title, description);
    }
    setTitle('');
    setDescription('');
    setShowAddNote(false);
  };

  if (!showAddNote) {
    return null;
  }

  return (
    <div className={classes.mid}>
      <h2>{editNoteId ? "Edit Note" : "Add New Note"}</h2>
      <div>
        <label>
          Note Title: <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <p>
          Note Desc: <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </p>
      </div>
      <div className={classes.btn}>
        <button onClick={handleAddOrUpdateNote}>{editNoteId ? "Update" : "Add To Book"}</button>
        <button className={classes.closeBtn} onClick={() => setShowAddNote(false)}>Close</button>
      </div>
    </div>
  );
};

export default AddNote;
