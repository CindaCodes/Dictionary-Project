import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.results);

  if (props.results && props.results.meanings) {
    return (
      <div className="Results mt-4">
        <h2 className="text-center">
          <strong>{props.results.word}</strong> /  
          {" "}{props.results.phonetic}
        </h2>
        {props.results.meanings.map((meaning, index) => (
          <Meaning meaning={meaning} key={index} />
        ))}
      </div>
    );
  } else {
    return null;
  }
}
