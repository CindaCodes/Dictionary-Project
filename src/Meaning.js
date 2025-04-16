import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Meaning(props) {
  const { definitions, partOfSpeech, synonyms, antonyms } = props.meaning;


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
        {(synonyms.length > 0 || antonyms.length > 0) && (
          <p className="syn-ant-hint text-center mt-3">
            <em>Click a word for a new definition</em>
          </p>
        )}
        <Synonyms
          synonyms={synonyms}
          onSearch={props.onSearch}
          setKeyword={props.setKeyword}
        />

        <Antonyms
          antonyms={antonyms}
          onSearch={props.onSearch}
          setKeyword={props.setKeyword}
        />
      </div>
    </div>
  );
}
