import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function createNote(note) {
  return (
    <div key={note.id}>
      <Note
        className="notes-container"
        title={note.title}
        content={note.content}
      />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
