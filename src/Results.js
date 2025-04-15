import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2 className="highlight display-6 text-center mt-3">{props.results.word}</h2>
        <div className="hightlight">
          {" "}
          {props.results.phonetics
            .filter((p) => p.text || p.audio)
            .slice(0, 1)
            .map((phonetic, index) => (
              <Phonetics phonetic={phonetic} key={index} />
            ))}
        </div>
        {props.results.meanings.map((meaning, index) => (
          <Meaning meaning={meaning} key={index} />
        ))}
      </div>
    );
  } else {
    return null;
  }
}
