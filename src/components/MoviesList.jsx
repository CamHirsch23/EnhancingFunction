import React, { useState } from 'react';

const MoviesList = () => {
    const [movies, setMovies] = useState([
        { title: 'Inception', genre: 'Action', description: 'A mind-bending thriller by Christopher Nolan.', showDetails: false },
        { title: 'The Godfather', genre: 'Crime', description: 'A classic mafia movie directed by Francis Ford Coppola.', showDetails: false },
        { title: 'Toy Story', genre: 'Animation', description: 'A heartwarming tale of toys coming to life.', showDetails: false },
    ]);

    const [showAll, setShowAll] = useState(true);

    const toggleDetails = (index) => {
        const newMovies = [...movies];
        newMovies[index].showDetails = !newMovies[index].showDetails;
        setMovies(newMovies);
    };

    const removeMovie = (index) => {
        const newMovies = movies.filter((_, i) => i !== index);
        setMovies(newMovies);
    };

    const toggleView = () => {
        setShowAll(!showAll);
    };

    const filteredMovies = showAll ? movies : movies.filter(movie => movie.genre === 'Action');

    return (
        <div>
            <button onClick={toggleView}>
                {showAll ? 'Show Action Movies' : 'Show All Movies'}
            </button>
            <ul>
                {filteredMovies.map((movie, index) => (
                    <li key={index}>
                        <span onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
                            {movie.title}
                        </span>
                        <button onClick={() => removeMovie(index)}>Remove</button>
                        {movie.showDetails && <p>{movie.description}</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;