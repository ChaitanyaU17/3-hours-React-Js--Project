import React from 'react'
import NoteBook from './components/NoteBook'
import AddNote from './components/AddNote'
import { NoteProvider } from './components/NoteContext'

const App = () => {
  return (
  <NoteProvider>
    <div>
      <NoteBook />
      <AddNote />
    </div>
</NoteProvider>
  )
}

export default App
