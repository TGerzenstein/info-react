import React from 'react';
import './App.css';
import ListadoPeliculas from './components/ListadoPeliculas';




function App() {
  return (
    <div className='App'>
      <h1 className='titulo-app'>Últimos estrenos</h1>
      <div className='contenedor-principal'>
      
      <ListadoPeliculas />

      </div>
    </div>
  );
}


export default App;