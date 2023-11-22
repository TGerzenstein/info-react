import React from 'react';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import AgregarAlCarrito from './components/AgregarAlCarrito';
import NuevosProductos from './components/NuevosProductos';



function App({ onDatosRecibidos }) {
  
  //Estados de los datos
  const [listasProductos, setListaProductos] = useState([]);
  const [total, setTotal ] = useState(0);
  const [countProductos, setCountProductos] = useState(0);


  // Función que se pasa al componente hijo como prop
  const handleDatosRecibidos = (nombreProducto, precioProducto) => {
    if (onDatosRecibidos) {
      onDatosRecibidos(nombreProducto, precioProducto);
    }

    const nuevoProducto = {
      nombre: nombreProducto,
      precio: precioProducto,
    };

    // Actualiza el estado para agregar el nuevo producto a la lista
    setListaProductos((prevLista) => [...prevLista, nuevoProducto]);
  };


  return (
    <>
      <div>
        <Header 
          listasProductos={listasProductos} 
          setListaProductos={setListaProductos}
          total={total}
          setTotal={setTotal}
          countProductos={countProductos}
          setCountProductos={setCountProductos}
        />
      </div>
      <div>
        <NuevosProductos onDatosRecibidos={handleDatosRecibidos}/>
      </div>
      <div>
        <AgregarAlCarrito

         listasProductos={listasProductos} 
         setListaProductos={setListaProductos}
         total={total}
         setTotal={setTotal}
         countProductos={countProductos}
         setCountProductos={setCountProductos}

        />
      </div>     
      <div className='container'>
        <h3>Lista de Productos:</h3>
        <ul>
          {listasProductos.map((producto, index) => (
            <li key={index}>
              Nombre: {producto.nombre} y el precio: {producto.precio}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;