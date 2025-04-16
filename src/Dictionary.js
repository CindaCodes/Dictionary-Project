import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function fetchDefinition(word) {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setResults(response.data[0]);
        setError(null);
      })
      .catch(() => {
        setError(
          <>
            😅 Uhhh ohhh! No results found for <strong>"{word}"</strong>.
            <br />
            Try a different word?
          </>
        );
        setResults(null);
      });
  }

 function search(eventOrWord) {
   if (typeof eventOrWord === "string") {
     setKeyword(eventOrWord);
     fetchDefinition(eventOrWord);
     window.scrollTo({ top: 0, behavior: "smooth" }); // 🪄 scroll to top
   } else {
     eventOrWord.preventDefault();
     if (!keyword.trim()) {
       setError("Please enter a word to search!");
       setResults(null);
       return;
     }
     fetchDefinition(keyword);
     window.scrollTo({ top: 0, behavior: "smooth" }); // 🪄 scroll to top
   }
 }


  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search for a word..."
          autoFocus={true}
          onChange={handleKeywordChange}
          value={keyword}
        />
      </form>

      {error && <div className="error-message">{error}</div>}

      <Results results={results} onSearch={search} setKeyword={setKeyword} />
    </div>
  );
}
