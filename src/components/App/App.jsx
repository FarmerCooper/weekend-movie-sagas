import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";

// Components will go here
import MovieList from "../MovieList/MovieList";
import DetailsView from "../DetailsView/DetailsView";

function App() {
  const dispatch = useDispatch();

  // Add dispatch to for SAGA to listen
  // User sent to DetailsView page
  // Gets Details
  const sendToDetailsView = () => {
    dispatch({ type: "GET_DETAILS" });
  };

  return (
    <Router>
      <div>
        <Route path="/" exact>
          <header className = "main-page">
            The Movies Saga!
          </header>
        </Route>
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Router>
          <Route path="/details" exact>
            <DetailsView />
          </Route>
        </Router>
      </div>
    </Router>
  );
}

export default App;
