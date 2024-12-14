import React from "react";


const Moviecard = ({ movie }) => {
    let ratingElement;

    if (movie.rating > 5) {
        ratingElement = (
            <div className="movie-rating" style={{ background: "#2ecc71" }}>
                Рейтинг: {movie.rating}
            </div>
        );
    } else {
        ratingElement = (
            <div className="movie-rating" style={{ background: "gray" }}>
                Рейтинг: {movie.rating}
            </div>
        );
    }
    let typelement;

    if (movie.type > "Аренда") {
        typelement = (
            <div className="movie-type" style={{ color: "#2ecc71"}}>{movie.type}</div>
        );
    } else {
        typelement = (
            <div className="movie-type" style={{ color: "#3498db"}}>{movie.type}</div>

        );
    }


    return (
        <div className="movie">
            <img src={movie.image} alt={movie.title} />
            {ratingElement}
            <div className="movie-info">
                <div className="movie-title">{movie.title}</div>
                {typelement}
            </div>
        </div>
    );
};

export default Moviecard;