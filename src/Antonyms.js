import React from "react";

export default function Antonyms({ antonyms, onSearch, setKeyword }) {
  if (!antonyms || antonyms.length === 0) return null;

  function handleClick(word) {
    setKeyword(word);
    onSearch(word);
  }

  return (
    <div className="SynAnto-container">
      <strong className="highlight">Antonyms:</strong>
      <div className="syn-ant-list">
        {antonyms.map((antonym, index) => (
          <div
            className="syn-ant-item"
            key={index}
            onClick={() => handleClick(antonym)}
          >
            {antonym}
          </div>
        ))}
      </div>
    </div>
  );
}
