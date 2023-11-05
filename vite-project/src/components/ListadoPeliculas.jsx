import React from 'react';
import '../css/peliculas.css';
import moviesData from '../MOVIES_DATA.json'
import Pelicula from './Pelicula';


function ListadoPeliculas() {
  let key = 0;
  return (
    <div className="test">
      {moviesData.map((pelicula) => {
        key++;
        return (
          <div key={key} className="contenedor-peliculas">
            <Pelicula peli={pelicula} />
          </div>
        );
      })}
    </div>
  );
  
}


 
export default ListadoPeliculas;