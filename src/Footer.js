import React from "react";

export default function Footer() {
  return (
    <footer className="custom-footer text-center mt-4">
      <p>
        This project was{" "}
        <a
          href="https://www.linkedin.com/in/jacinda-bietz-3158a0338/"
          target="_blank"
          rel="noopener noreferrer"
        >
          coded by Jacinda Bietz
        </a>
        , is{" "}
        <a
          href="https://github.com/CindaCodes/dictionary-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://wordly-wise.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
        .
      </p>
    </footer>
  );
}
