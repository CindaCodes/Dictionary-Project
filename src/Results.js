import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  const results = props.results;

  if (!results || !results.meanings) return null;

  console.log("📦 Results visible:", props.results);
  console.log("🔊 Phonetics data:", props.results.phonetics);

  const phonetic =
    results.phonetic || results.phonetics?.find((p) => p.text)?.text;

  return (
    <div className="Results mt-4">
      <h2 className="text-center">
        <strong>{results.word}</strong> / {phonetic}
      </h2>

      {results.phonetics && <Phonetics phonetics={results.phonetics} />}

      {results.meanings.map((meaning, index) => (
        <Meaning
          key={index}
          meaning={meaning}
          onSearch={props.onSearch}
          setKeyword={props.setKeyword}
        />
      ))}
    </div>
  );
}
