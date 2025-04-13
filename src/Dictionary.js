import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  function search(event) {
    event.preventDefault();
    alert("Searching for " + keyword);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search for a word..."
          autoFocus="true"
          onChange={handleKeywordChange}
        />
      </form>
      <div className="hint">Suggested words: sunset, yoga, travel</div>
    </div>
  );
}
