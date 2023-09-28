import PropTypes from 'prop-types';

export const RenderMovies=({listOfMovies})=>{
    // console.log(listOfMovies);
    return(
    <div id='render-movies'>
        {listOfMovies.map((movie,index)=>{
            return(
                <div key={index} className='movie-card'>
                    <h3>{movie.name}</h3>
                    <p>Release date: {movie.date}</p>
                    <p>Genre: {movie.genre}</p>
                    <p className='movie-info' >Plot of the movie: {movie.plot}</p>
                    <a href={movie.imdbLink}>Link to the IMDB page for {movie.name}</a>
                    <img src={movie.imgUrl} alt="Poster image of the movie" />
                </div>
            )
        })}
    </div>
    )
}

RenderMovies.propTypes={
    listOfMovies: PropTypes.arrayOf(PropTypes.object),
}