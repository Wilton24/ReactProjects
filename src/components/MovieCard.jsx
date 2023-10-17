import React from "react";

export default function MovieCard({ year, poster, type, title }) {
  return (
    <>
      <div className="movie">
        <div>
          <p>{year}</p>
        </div>

        <div>
          <img
            src={poster !== "N/A" ? poster : `https://via.placeholder.com/400`}
            alt="movie_thumbnail"
          />
        </div>
        <div>
          <span>{type}</span>
          <h3>{title}</h3>
        </div>
      </div>
    </>
  );
}
