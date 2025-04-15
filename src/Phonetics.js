import React from "react";

export default function Phonetic(props) {
  const { text, audio } = props.phonetic;

  if (!text && !audio) return null;

  return (
    <div className="Phonetic text-center">
      {text && (
        <h5 className="phonetic-text highlight d-block mb-2">{text}</h5>
      )}
      {audio && (
        <div className="d-flex justify-content-center">
          <audio controls src={audio} className="phonetic-audio">
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
}
