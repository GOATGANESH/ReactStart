import React from 'react'

const MovieCard = (props) => {
  return (
    <div className='card'>
      <div className="poster">
        <img className='poster-image' src={props.movieData.Poster} alt="Ra.one" />
      </div>
      <div className="info">
        <h5>{props.movieData.Title}</h5>
        <h6>Year - {props.movieData.Year}</h6>
      </div>
    </div>
  )
}

export default MovieCard