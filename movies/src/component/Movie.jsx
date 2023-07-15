function Movie(props) {
  const { title, year } = props;
  let movieTitle = title + " (" + year + ")";
  return (
    <div>
      <h1> {movieTitle} </h1>
      <img src={props.posterPath} alt="movie poster" />
     </div>
  );
}

export default Movie;