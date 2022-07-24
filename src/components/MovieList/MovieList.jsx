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
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={movie.poster}
                  onClick={(event) => imgClick(movie)}
                  alt={movie.title}
                />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
