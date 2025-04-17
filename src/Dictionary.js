import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handlePhotoResponse(response) {
    setPhotos(response.data.photos);
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
            ✨ Oh dear, it seems the magic has eluded us...
            <br />
            No definition found for <strong>"{word}"</strong>.
            <br />
            Perhaps, try a different word to unlock the hidden secrets?
          </>
        );
        setResults(null);
      });

    let key = process.env.REACT_APP_API_KEY;
    let photoApiUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${key}`;
    axios.get(photoApiUrl).then(handlePhotoResponse);
  }

  function search(eventOrWord) {
    if (typeof eventOrWord === "string") {
      setKeyword(eventOrWord);
      fetchDefinition(eventOrWord);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      eventOrWord.preventDefault();
      if (!keyword.trim()) {
        setError("Please enter a word to search!");
        setResults(null);
        return;
      }
      fetchDefinition(keyword);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <div className="Dictionary mt-3">
      <form onSubmit={search} className="search-form mb-1">
        <input
          type="search"
          placeholder="Search for a word..."
          autoFocus={true}
          onChange={handleKeywordChange}
          value={keyword}
        />
        <button type="submit" className="mobile-only">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      <Results results={results} onSearch={search} setKeyword={setKeyword} />
      <Photos photos={photos} />
    </div>
  );
}
