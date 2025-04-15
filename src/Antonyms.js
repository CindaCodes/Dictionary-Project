import React from "react";

export default function Antonyms(props) {
  if (!props.antonyms || props.antonyms.length === 0) return null;

  return (
    <div className="SynAnto-container">
      <strong className="highlight">Antonyms:</strong>
      <div className="syn-ant-list">
        {props.antonyms.map((antonym, index) => (
          <div className="syn-ant-item" key={index}>
            {antonym}
          </div>
        ))}
      </div>
    </div>
  );
}
