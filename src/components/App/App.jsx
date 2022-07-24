import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';

// Components will go here
import MovieList from '../MovieList/MovieList'
import DetailsView from '../DetailsView/DetailsView';


function App() {

  const dispatch = useDispatch();

    // Add dispatch to for SAGA to listen
    // User sent to DetailsView page
    // Gets Details
    const sendToDetailsView = () => {
      dispatch({type: 'GET_DETAILS'})
    }


  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Router>
          <Route path="/details" exact>
            <DetailsView />
          </Route>
        </Router>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
