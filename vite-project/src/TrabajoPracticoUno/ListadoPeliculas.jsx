import React from 'react';
import './listadoPeliculas.css';
import moviesData from '../MOVIES_DATA.json'
import Pelicula from '../TrabajoPracticoUno/Pelicula';


function ListadoPeliculas() {
   let key = 0;
   return (
     <div className="container-movies">
       {moviesData.map((pelicula) => {
         key++;
         return (
           <div key={key} className='movies'>
             <Pelicula peli={pelicula} />  
           </div>
         );
       })}
     </div>
   );
  
}

 
export default ListadoPeliculas;