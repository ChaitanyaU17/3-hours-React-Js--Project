import React, { createContext, useState } from 'react';

const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [searchedTerm, setSearchedTerm] = useState('');
  const [showAddNote, setShowAddNote] = useState(false);

  const addNote = (title, description) => {
    setNotes([...notes, { id: Date.now(), title, description }]);
  };

  const deleteNote = (noteId) => {
    setNotes(notes.filter(note => note.id !== noteId));
  };

  const searchNote = (term) => {
    setSearchedTerm(term);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, searchNote, searchedTerm, setShowAddNote, showAddNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteContext;
