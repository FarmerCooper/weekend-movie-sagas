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
        <div><img src={descriptions[0].poster} /></div>
    </div>
    </>
  );
}

export default DetailsView;
