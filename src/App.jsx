import { useState, useEffect } from "react";
import "./styles/App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./components/MovieCard";

export default function App() {
  const API_Key = `32773dc0`;
  const API_url = `https://www.omdbapi.com/?i=tt3896198&apikey=${API_Key}`;

  const [movies, setMovies] = useState([]);
  const [movieTitle, setMovieTitle] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_Key}&s=${title}`
    );
    const data = await response.json();
    setMovies(data.Search);
    console.log(data.Search);
  };
  useEffect(() => {
    searchMovies("ironman");
  }, []);

  const movie1 = {
    Title: "Italian Spiderman",
    Year: "2007",
    imdbID: "tt2705436",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
  };

  return (
    <div className="app">
      <h1>Movie Spakens</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={movieTitle}
          onChange={(e) => {
            setMovieTitle(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="search icon"
          onClick={() => {
            searchMovies(movieTitle);
          }}
        />
      </div>
      {movies?.length >= 1 ? (
        <div className="container">
          {movies.map((movie, index) => {
            return (
              <MovieCard
                key={index}
                year={movie.Year}
                poster={movie.Poster}
                type={movie.Type}
                title={movie.Title}
              />
            );
          })}
        </div>
      ) : (
        <div className="empty">
          <h1>Sorry, there are no results for {movieTitle}</h1>
        </div>
      )}
    </div>
  );
}
