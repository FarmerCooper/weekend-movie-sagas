import { useSelector } from "react-redux";
import {useHistory} from 'react-router-dom'

{
  /* Details for the movies will go here */
}

function DetailsView() {
  const descriptions = useSelector((store) => store.descriptions);

  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  }

  return (
    <>
      <h1>Movie Details</h1>
      <div>
        <div><h2>{descriptions[0].title}</h2></div>
        <div><img src={descriptions[0].poster} /><span>{descriptions[0].genres}</span></div>
        <p>{descriptions[0].description}</p>
      </div>
      <button onClick={handleClick}>Go Back to Main Page</button>
    </>
  );
}

export default DetailsView;
