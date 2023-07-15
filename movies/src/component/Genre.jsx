import Movie from "./Movie.jsx";


function Genre(props) {
  const { genre, movie1, movie2 } = props;

console.log(props);

  return (
 <div className="genre">  
    <h1> Genre: {genre.genreName} </h1> 
    <p> {genre.genreDescription}</p>
    <img src={genre.genreIconPath} alt="genre icon" />
    <Movie title = {movie1.movieTitle} year = {movie1.movieYear} posterPath = {movie1.moviePosterPath}/>
    <Movie title = {movie2.movieTitle} year = {movie2.movieYear} posterPath = {movie2.moviePosterPath}/> 
</div>
);
}

export default Genre;