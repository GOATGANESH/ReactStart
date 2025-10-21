import React, { useEffect } from "react";
import NavBar from "./components/navbar/NavBar";
import "./mediaqueries.css";
import ContentContainer from "./components/movie-anime-container/ContentContainer";
import { useState } from "react";

const App = () => {
  const [Movies, setMovies] = useState([]);

  const [Animes, setAnimes] = useState([]);

  function getAnimes() {
    let collected = [];
    // let url="https://api.jikan.moe/v4/anime?q=naruto&limit=10"
    let url = "https://api.jikan.moe/v4/top/anime?page=2&limit=6";
    fetch(url)
      .then((res) => res.json())
      .then((resData) => {
        if (resData.data) {
          setAnimes((prev) => [...prev, ...resData.data]);
        }
      });
  }

  async function getMovies() {
    let letters = ["india", "man", "magic", "love"];
    let collected = [];
    for (let l of letters) {
      const res = await fetch(
        `https://www.omdbapi.com/?s=${l}&page=1&apikey=8cd6d837`
      );
      const data = await res.json();
      if (data.Search) {
        collected = [...collected, ...data.Search];
      }
    }

    setMovies(collected);
  }

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    getAnimes();
  }, []);
  
  return (
    <div className="app-container">
      <NavBar />
      <ContentContainer moviesSet={Movies.slice(0, 9)} animesSet={Animes} />
    </div>
  );
};

export default App;
