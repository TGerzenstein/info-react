import React from 'react';
import '../css/pelicula.css';


function Pelicula(props) {
  return (
    <div className="pelicula">
      <div className="contenedor-texto">
        <img src={props.peli.poster} alt="Foto de pelicula" 
             className='imagen-pelicula' />
        <p className="nombre-pelicula">{props.peli.title}</p>
        <p className="release"> {props.peli.releaseDate} |  {props.peli.duration}  |  {props.peli.genres}</p>
        <p className="score"><i class="bi bi-star-fill"></i> {props.peli.rating} <span className='numero-cuadrado'>{props.peli.metascore}</span> Metascore</p>
        <p className='director-pelicula'>{props.peli.director} | {props.peli.mainActors}</p>
        <p className='texto-pelicula'>{props.peli.plot}</p>
      </div>
    </div>
  );
}
 
export default Pelicula;