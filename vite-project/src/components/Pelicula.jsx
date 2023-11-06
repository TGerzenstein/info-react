import React from 'react';
import '../css/pelicula.css';


function Pelicula(props) {
  return (
    <div className="pelicula">
      <div className="contenedor-texto">
        <img src={props.peli.poster} alt="Foto de pelicula" 
             className='imagen-pelicula' />
        <p className="nombre-pelicula">{props.peli.title}</p>
        <p className="release">{props.peli.releaseDate}</p>
        <p className="duration">{props.peli.duration}</p>
        <p className='genres'>{props.peli.genres}</p>
        <p className='director-pelicula'>{props.peli.director}</p>
        <p className="actors">{props.peli.mainActors}</p>
        <p className='texto-pelicula'>{props.peli.plot}</p>
        <p className="score">{props.peli.metascore}</p>
        <p className="rating">Rating: {props.peli.rating}</p>
      </div>
    </div>
  );
}
 
export default Pelicula;