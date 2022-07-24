import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./DetailsView.css"

{
  /* Details for the movies will go here */
}

function DetailsView() {
  const descriptions = useSelector((store) => store.descriptions);

  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <>
      <h1>Movie Details</h1>
        <button className="button" onClick={handleClick}>Go Back to Main Page</button>
        <div className="img-block">
          <h2>{descriptions[0].title}</h2>
          <p>Genres: {descriptions[0].genres}</p>
          <span>
            <img className="img" src={descriptions[0].poster} />
            <p className="img-text">{descriptions[0].description}</p>
          </span>
        </div>
    
      
    </>
  );
}

export default DetailsView;
