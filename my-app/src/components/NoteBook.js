import React, { useContext } from 'react';
import classes from './NoteBook.module.css';
import NoteContext from "./NoteContext";

const NoteBook = () => {
  const { notes, deleteNote, searchNote, searchedTerm, setShowAddNote } = useContext(NoteContext);

  const handleSearch = (event) => {
    searchNote(event.target.value.toLowerCase());
  };

  const filteredNotes = searchedTerm ? notes.filter((note) => note.title.toLowerCase().includes(searchedTerm)) : notes;

  return (
    <div className={classes.header}>
      <h1>NoteBook</h1>
      <label>
        Search Notes: <input type="text" onChange={handleSearch} />
      </label>
      <p>Total Notes: <span>{notes.length}</span></p>
      <p>Showing: <span>{filteredNotes.length}</span></p>
      <button onClick={() => setShowAddNote(true)}>Add New Note</button>
      <ul className={classes.list}>
        {filteredNotes.map((note) => (
          <li key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.description}</p>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteBook;
