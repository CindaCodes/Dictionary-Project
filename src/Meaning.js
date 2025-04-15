import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
export default function Meaning(props) {
  const { definitions, synonyms, antonyms, partOfSpeech } = props.meaning;

  return (
    <div className="Meaning">
      <h3 className="part-of-speech highlight">{partOfSpeech}</h3>

      <div className="definition-box">
        {definitions.map((definition, index) => (
          <div className="definition-item" key={index}>
            <p>
              <strong>Definition {index + 1}:</strong> {definition.definition}
            </p>
            {definition.example && (
              <p className="example">
                <strong>Example:</strong> <em>{definition.example}</em>
              </p>
            )}
          </div>
        ))}

        <Synonyms synonyms={synonyms} />
        <Antonyms antonyms={antonyms} />
      </div>
    </div>
  );
}
