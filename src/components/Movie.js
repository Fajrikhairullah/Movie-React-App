import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const setLike = (likes) => {
    if (likes >= 50000) {
        return "green";
    } else if (likes >= 25000) {
        return "orange";
    } else {
        return "red";

    }
};

function Movie({ title, image, like, showTime }) {
    return (
        <div>
            <div style={{ marginTop: 30, textAlign: 'center' }}>{title}</div>
            <div className="movie" >

                <img src={image} alt="" />
                <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} /> <span className={`tag ${setLike(like)}`}>
                    {like}
                </span>
                <div className="movie-over">
                    <h2 style={{ color: "black" }}>Detail</h2>
                    <p>{title}</p>
                    <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} /> <span className={`tag ${setLike(like)}`}>
                        {like}
                    </span>
                    <h6>{showTime}</h6>
                </div>
            </div>
        </div>


    )
};

export default Movie;