import React from 'react';
import './pelicula.css';



function Pelicula(props) {
  
  const metascore = props.peli.metascore;
  let color;

   if (metascore >= 0 && metascore <= 49) {
     color = 'red';
   } else if (metascore >= 50 && metascore <= 59) {
     color = 'yellow';
   } else if (metascore >= 60 && metascore <= 100) {
     color = 'green';
   } else {
     color = 'white'; 
   }

   return (
     <div className="pelicula">
       <div className="contenedor-texto">
         <img src={props.peli.poster} alt="Foto de pelicula" 
              className='imagen-pelicula' />
         <p className="nombre-pelicula">{props.peli.title}</p>
         <p className="release"> {props.peli.releaseDate} |  {props.peli.duration}  |  {props.peli.genres}</p>
         <p className="score"><i class="bi bi-star-fill"></i> {props.peli.rating} 
         <span style={{ backgroundColor: color, padding: '8px' }}>{props.peli.metascore}</span> Metascore</p>
         <p className='director-pelicula'>{props.peli.director} | {props.peli.mainActors}</p>
         <p className='texto-pelicula'>{props.peli.plot}</p>
       </div>
     </div>
   );
}
 
export default Pelicula;