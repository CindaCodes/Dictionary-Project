import React from "react";

export default function Synonyms(props) {
  if (!props.synonyms || props.synonyms.length === 0) return null;

  return (
    <div className="SynAnto-container">
      <strong className="highlight">Synonyms:</strong>
      <div className="syn-ant-list">
        {props.synonyms.map((synonym, index) => (
          <div className="syn-ant-item" key={index}>
            {synonym}
          </div>
        ))}
      </div>
    </div>
  );
}
