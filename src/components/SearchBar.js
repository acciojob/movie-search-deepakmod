import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {

    let [movieName, setMovieName]=useState('');
    let [moviesList, setMoviesList]=useState([]);

    function showMovies(event){
        event.preventDefault();
        axios.get(`https://www.omdbapi.com/?s=${movieName}&apikey=1cc2a4e0`)
        .then(res=>(setMoviesList(res.data.Search)));
    }

    return (
        <form>
            <p>Search Movie</p>
            <input type="text" value={movieName} onChange={(e)=>setMovieName(e.target.value)} />
            <button onClick={(e)=>{showMovies(e)}}>Search</button>

            {moviesList ? 
            <ul>
                {moviesList.map(movie=>(
                    <li key={movie.imdbID}>
                        <h3>{movie.Title}</h3>
                        <img src={movie.Poster} alt={movie.Title} />
                    </li>))}
            </ul>:
            <p className='error'>Invalid movie name. Please try again.</p>}
        </form>
    );
};

export default SearchBar;