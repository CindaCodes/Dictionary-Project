import "./Dictionary.css";
import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function search(event) {
    event.preventDefault();

    if (!keyword.trim()) {
      setError("Please enter a word to search!");
      setResults(null);
      return;
    }

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setResults(response.data[0]);
        setError(null);
      })
      .catch(() => {
       setError(
         <>
           😅 Uhhh ohhh! No results found for <strong>"{keyword}"</strong>.
           <br />
           Try a different word?
         </>
       );

        setResults(null);
      });
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search for a word..."
          autoFocus={true}
          onChange={handleKeywordChange}
        />
      </form>

      {error && <div className="error-message">{error}</div>}
      {results && <Results results={results} />}
    </div>
  );
}
