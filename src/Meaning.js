import React from "react";

export default function Meaning(props) {
  const { meaning } = props;

  if (!meaning || !meaning.definition) {
    return null;
  }

  return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>
      <p>{meaning.definition}</p>
      {meaning.example && <em>{meaning.example}</em>}
    </div>
  );
}
