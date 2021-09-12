import React, { useState } from 'react';
import MovieCard from './movieCard';
import './searchMovies.css'

export default function SearchMovies() {

    const [ query, setQuery ] = useState('');
    const [ movieList, setMovieList ] = useState([]);

    const getMovies = async () => {
        const apiKey = '65060f34709539c10333a33728fe6197';
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;
        const response = await fetch(url);
        const movies = await response.json();
        setMovieList(movies.results);
        console.log(movies);
    }

    const handleChange = (event) => {
        setQuery(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        getMovies();
        setQuery('')
    }

    

    return (
        <React.Fragment>
            <form className="movie-form" onSubmit={handleSubmit}>
                <label htmlFor="movieQuery">Movie Name</label>
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    onClick={(event) => event.target.setSelectionRange(0, query.length)}
                    name="movieQuery"
                    id="movieQuery"
                 />
                <button disabled = {!query} >Search</button>
            </form>
            <div className="movie-list">
                { movieList.filter(m => m.poster_path).map(m => <MovieCard key={m.id} movie={m} />) }
            </div>
        </React.Fragment>)
}