// import Movie from "./Movie.jsx";

function Genre(props) {
  const { genre, movie1, movie2 } = props;

 let localGenre = genre;




  return (
 <div className="genre">  
    <h1> Genre: {localGenre.genreName} </h1>   
    {/* <h1> Genre: {genreName} </h1>
    <p> {genreDescription} </p> 
    <Movie title = {movieTitle1} year = {movieYear1} />
    <Movie title = {movieTitle2} year = {movieYear2} />     */}
</div>
);
}

export default Genre;