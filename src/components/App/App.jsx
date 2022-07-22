import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';


// Components will go here
import MovieList from '../MovieList/MovieList'
import DetailsView from '../DetailsView/DetailsView';

function App() {
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
