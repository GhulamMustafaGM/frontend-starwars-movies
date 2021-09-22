import React from 'react'

// Created movieView function for movieView
function movieView(props) {

    const movie = props.movie;

    /*  If movie prop, then started in redux as condition (false) and it accepted as a prop to movie component. 
        If movie is equal to false, then user did not choose anything.... 
    */
    if (movie === false) {
        return (
            <p><b>No Movie Selected</b></p>
        );
    }
    else {
        return (
            // The user select MovieView with title and Directed by.
            <div className="container">
                <h4>{movie.title}</h4>
                <p>{movie.opening_crawl}</p>
                <p>Directed by: {movie.director}</p>
            </div>
        )
    }
}

export default movieView;
