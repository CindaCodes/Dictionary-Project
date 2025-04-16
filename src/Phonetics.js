import React from "react";

export default function Phonetics(props) {
  if (!props.phonetics || props.phonetics.length === 0) return null;

  const firstAudio = props.phonetics.find((phonetic) => phonetic.audio)?.audio;

  if (!firstAudio) return null;

  return (
    <div className="Phonetics">
      <div className="Phonetic text-center my-3">
        <div className="phonetic-audio mt-2">
          <audio controls src={firstAudio}>
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
}
