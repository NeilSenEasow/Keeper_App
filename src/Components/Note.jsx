import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h3>{props.title}</h3>
      <div>
        <h4 className="noteContent">{props.content}</h4>
      </div>
    </div>
  );
}

export default Note;
