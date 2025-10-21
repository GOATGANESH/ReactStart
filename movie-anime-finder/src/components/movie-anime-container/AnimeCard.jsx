import React from "react";

const AnimeCard = (props) => {

    return (
      <div className="card">
        <div className="poster">
          <img
            className="poster-image"
            src={props.animeData.images.jpg.image_url}
            alt="Naruto"
          />
        </div>
        <div className="info">
          <h5>{props.animeData.title}</h5>
          <h6 style={{color:'orange'}}>Year - {props.animeData.year}</h6>
        </div>
      </div>
  );
};

export default AnimeCard;
