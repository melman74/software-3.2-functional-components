import Movie from "./Movie.jsx";

function Genre(props) {
  const { genreName, genreDescription, movieTitle1, movieYear1, movieTitle2, movieYear2 } = props;

  return (
 <div className="genre">    
    <h1> Genre: {genreName} </h1>
    <p> {genreDescription} </p> 
    <Movie title = {movieTitle1} year = {movieYear1} />
    <Movie title = {movieTitle2} year = {movieYear2} />    
</div>
);
}

export default Genre;