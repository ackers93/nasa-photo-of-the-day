import React from "react";

const NasaCard = props => {
    return (
        <div className="photo">
            <h1>{props.photo.title}</h1>
            <div className="media">{props.photo.media_type === 'video' ? (<iframe title="video" alt="space" width="420" height="315" src={props.photo.url} />) : (<img alt="space" src={props.photo.url} />)} </div>
            <h2>{props.photo.date}</h2>
            <p>{props.photo.explanation}</p>
        </div>
    );
};

export default NasaCard;