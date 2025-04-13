import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.results);

  if (props.results && props.results.meanings) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <h5 className="text-secondary">{props.results.phonetic}</h5>
        {props.results.meanings.map(function (definition, index) {
          return (
            <div key={index}>
              <h3>{definition.partOfSpeech}</h3>
              <div>
                {definition.definition}
                <br />
                <em>{definition.example}</em>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
