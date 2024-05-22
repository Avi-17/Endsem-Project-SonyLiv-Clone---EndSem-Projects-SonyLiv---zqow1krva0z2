import React, { useEffect } from "react";
import Poster from "./poster";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Trailer from "../Vdo/Trailer";

export default function Craousel(props) {
  const [shows, setShows] = useState([]);
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [webSeries, setWebSeries] = useState([]);
  const [documentary, setDoucmentary] = useState([]);
  const [trailerData, setTrailerData] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [keywords, setKeywords] = useState(null);
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const myHeaders = new Headers();
      myHeaders.append("accept", "application/json");
      myHeaders.append("projectID", "zqow1krva0z2");
      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      try {
        const response = await fetch(
          "https://academics.newtonschool.co/api/v1/ott/show?limit=200",
          requestOptions
        );
        const result = await response.json(); // Parse JSON response

        const movies = result.data.filter((movie) => movie.type === "movie");
        const tvShows = result.data.filter((movie) => movie.type === "tv show");
        const webSeries = result.data.filter(
          (movie) => movie.type === "web series"
        );
        const documentary = result.data.filter(
          (movie) => movie.type === "documentary"
        );

        setMovies(movies);
        console.log(movies);
        setTvShows(tvShows);
        console.log(tvShows);
        setWebSeries(webSeries);
        console.log(webSeries);
        setDoucmentary(documentary);
        console.log(documentary);

        // console.log(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleMovieClick = (image_url, title, description) => {
    props.isSignedIn ? setTrailerData(image_url) : navigate("/login");
    props.isSignedIn ? setTitle(title) : navigate("/login");
    props.isSignedIn ? setDescription(description) : navigate("/login");
    props.isSignedIn ? setKeywords(keywords) : navigate("/login");
  };

  return (
    <div>
      {trailerData ? (
        <Trailer
          trailerData={trailerData}
          title={title}
          description={description}
          keywords={keywords}
        />
      ) : (
        <>
          <section className="mt-10">
            <h2 className="text-white font-extrabold text-3xl">Movies</h2>
            <div className="flex gap-4 justify-around overflow-x-auto">
              {movies.map((item) => (
                <Poster
                  image_url={item.thumbnail}
                  onClick={handleMovieClick}
                  title={item.title}
                  description={item.description}
                  keywords={item.keywords}
                />
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-white font-extrabold text-3xl">Web Series</h2>
            <div className="flex gap-4 justify-around overflow-x-auto">
              {webSeries.map((item) => (
                <Poster
                  image_url={item.thumbnail}
                  onClick={handleMovieClick}
                  title={item.title}
                  description={item.description}
                  keywords={item.keywords}
                />
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-white font-extrabold text-3xl">Documentary</h2>
            <div className="flex gap-4 justify-around overflow-x-auto">
              {documentary.map((item) => (
                <Poster
                  image_url={item.thumbnail}
                  onClick={handleMovieClick}
                  title={item.title}
                  description={item.description}
                  keywords={item.keywords}
                />
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-white font-extrabold text-3xl">TV Shows</h2>
            <div className="flex gap-4 justify-around overflow-x-auto">
              {tvShows.map((item) => (
                <Poster
                  image_url={item.thumbnail}
                  onClick={handleMovieClick}
                  title={item.title}
                  description={item.description}
                  keywords={item.keywords}
                />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
