import React from "react";

export default function Meaning(props) {
  const { meaning } = props;

  if (!meaning || !meaning.definition) {
    return null;
  }

  return (
    <div className="Meaning">
      <div className="definition-box">
        <h4>{meaning.partOfSpeech}</h4>
        <strong>Definition:</strong> {meaning.definition}
        {meaning.example && (
          <p>
            <strong>Example:</strong> <em>{meaning.example}</em>
          </p>
        )}
        {meaning.synonyms && meaning.synonyms.length > 0 && (
          <div className="synonym-list">
            <strong>Synonyms:</strong>
            <ul>
              {meaning.synonyms.map((synonym, index) => (
                <li key={index}>{synonym}</li>
              ))}
            </ul>
          </div>
        )}
        {meaning.antonyms && meaning.antonyms.length > 0 && (
          <div className="antonym-list">
            <strong>Antonyms:</strong>
            <ul>
              {meaning.antonyms.map((antonym, index) => (
                <li key={index}>{antonym}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
