import React, { createContext, useState } from 'react';

const NoteContext = createContext();

export const NoteProvider = ({children}) => {
  const [notes, setNotes] = useState([]);
  const [searchedTerm, setSearchedTerm] = useState("");
  const [showAddNote, setShowAddNote] = useState(false);
  const [editNoteId, setEditNoteId] = useState(null);

  const addNote = (title, description) => {
    setNotes([...notes, { id: Date.now(), title, description }]);
  };

  const deleteNote = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId));
  };

  const editNote = (id, title, description) => {
    setNotes(
      notes.map((note) => (note.id === id ? { id, title, description } : note))
    );
    setEditNoteId(null);
  };

  const searchNote = (term) => {
    setSearchedTerm(term);
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, showAddNote, setShowAddNote, editNoteId, setEditNoteId, searchedTerm, setSearchedTerm,
               addNote, deleteNote, editNote, searchNote
       }}
    >
      {children}
    </NoteContext.Provider>
  );
}; 

export default NoteContext;