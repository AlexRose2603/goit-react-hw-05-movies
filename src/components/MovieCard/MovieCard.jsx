export const MovieCard = ({ movie }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  const imgUrl = imgBaseUrl.concat(poster_path);
  const releaseDate = release_date.slice(0, 4);
  const voteScore = vote_average.toFixed(1);
  const genresList = genres.map(ganre => ganre.name).join(', ');

  return (
    <div>
      <img src={imgUrl} alt="" />
      <div>
        <h2>
          {title}
          <span>{releaseDate}</span>
        </h2>
        <p>User rate: {voteScore}</p>
        <p>Overview: {overview}</p>
        <p>Genres: {genresList}</p>
      </div>
    </div>
  );
};
