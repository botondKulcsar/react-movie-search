import React from 'react';
import './movieCard.css'

const MovieCard = ({ movie }) => {
    return(
        <div className="card">
            <img className="card--image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`} alt="movie poster" />
            <div className="card--content">
                <h3 className="card--title">{ movie.title }</h3>
                <p><small>Release date: { movie.release_date }</small></p>
                <p><small>Rating: { movie.vote_average }</small></p>
                <p className="card--desc">{ movie.overview.length < 200 ? movie.overview : movie.overview.slice(0, 196) + '...'}</p>
            </div>
        </div>
    )
}

export default MovieCard;