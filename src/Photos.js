import React, { useEffect, useState } from "react";
import "./Photos.css";

export default function Photos(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!props.photos) {
    return null;
  }

  const photosToDisplay =
    windowWidth < 768 ? props.photos.slice(0, 4) : props.photos;

  return (
    <section className="Photos mt-4">
      <div className="row">
        {photosToDisplay.map((photo, index) => (
          <div className="col-6 col-md-4" key={index}>
            <a
              href={photo.src.original}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={photo.src.landscape}
                alt={photo.alt}
                className="img-fluid mb-4"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
