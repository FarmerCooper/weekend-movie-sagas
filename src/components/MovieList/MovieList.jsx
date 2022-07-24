import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./MovieList.css";

function MovieList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  const imgClick = (movie) => {
    console.log("This image was clicked", movie.id);
    dispatch({ type: "IMG_CLICKED", payload: movie.id });

    setTimeout(() => {
      history.push("/details");
    }, 25);
  };

  return (
    <main>
      <h2>MovieList</h2>
      <section className="movies">
        {movies.map((movie) => {
          return (
            <div className="card-style" key={movie.id}>
              <Card>
                <Card.Img
                  className="img-style"
                  variant="top"
                  src={movie.poster}
                  onClick={(event) => imgClick(movie)}
                  alt={movie.title}
                />
                <Card.Body>
                  <Card.Title className="movie-title">{movie.title}</Card.Title>
                  <Card.Text>
                    Genres: {movie.genres}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
