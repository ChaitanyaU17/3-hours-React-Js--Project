import React from "react";
import NoteBook from "./components/NoteBook";
import AddNote from "./components/AddNote";
import { NoteProvider } from "./components/NoteContext";

function App() {
  return (
    <NoteProvider>
      <div>
        <NoteBook />
        <AddNote />
      </div>
    </NoteProvider>
  );
}

export default App;
