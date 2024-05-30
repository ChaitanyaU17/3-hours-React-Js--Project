import React, { useContext, useState } from "react";
import classes from "./AddNote.module.css";
import NoteContext from "./NoteContext";

const AddNote = () => {
  const { addNote, setShowAddNote, showAddNote } = useContext(NoteContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddNote = (event) => {
    event.preventDefault();
    addNote(title, description);
    setTitle('');
    setDescription('');
    setShowAddNote(true);
  };

  if (!showAddNote) {
    return null;
  }

  return (
    <div className={classes.mid}>
      <h2>Add New Note</h2>
      <div>
        <label>
          Note Title: <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <p>
          Note Desc: <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </p>
      </div>
      <div className={classes.btn}>
        <button onClick={handleAddNote}>Add To Book</button>
        <button className={classes.closeBtn} onClick={() => setShowAddNote(false)}>Close</button>
      </div>
    </div>
  );
};

export default AddNote;
