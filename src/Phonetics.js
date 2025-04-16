import React from "react";

export default function Phonetics(props) {
  if (!props.phonetics || props.phonetics.length === 0) return null;

  return (
    <div className="Phonetics">
      {props.phonetics.map((phonetic, index) => {
        const { text, audio } = phonetic;
        if (!text && !audio) return null;

        return (
          <div className="Phonetic text-center my-3" key={index}>
            {audio && (
              <div className="phonetic-audio mt-2">
                <audio controls src={audio}>
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
