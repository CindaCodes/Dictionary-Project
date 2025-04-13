import React from "react";

export default function Meaning(props) {
  const { meaning } = props;

  if (!meaning.definitions || !Array.isArray(meaning.definitions)) {
    return null; 
  }

  return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>
      {meaning.definitions.map((definition, index) => (
        <div key={index}>
          <strong>{index + 1}.</strong> {definition.definition}
          <br />
          {definition.example && <em>{definition.example}</em>}
        </div>
      ))}
    </div>
  );
}
