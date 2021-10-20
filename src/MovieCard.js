function MovieCard({ imdbPage, title, summary, youtubePoster }) {
  return (
    <>
      <div className="movie-card">
        <img src={ youtubePoster } alt={ title }></img>
        <h3><a href={ imdbPage } target="_blank">{ title }</a></h3>
        <p>{ summary }</p>
      </div>
    </>
  );
}

export default MovieCard;
