import { useSelector } from "react-redux";

{
  /* Details for the movies will go here */
}

function DetailsView() {
  const descriptions = useSelector((store) => store.descriptions);
    console.log('this is what descriptions is:', descriptions[0].poster);
  return (
    <>
      <h1>Movie Details</h1>
      <div>
        <div><h2>{descriptions[0].title}</h2></div>
        <div><img src={descriptions[0].poster} /><span>{descriptions[0].genres}</span></div>
        <p>{descriptions[0].description}</p>
      </div>
    </>
  );
}

export default DetailsView;
