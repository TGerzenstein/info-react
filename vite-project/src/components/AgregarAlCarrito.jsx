import React from "react";
import '../css/agregarAlCarrito.css';


export default function agregarAlCarrito({ listasProductos, setListaProductos, countProductos, setCountProductos, total, setTotal }) {

  function agregarProductos(producto) {

    if(listasProductos.find(item => item.id === producto.id)) {
      
      const productos = listasProductos.map(item => 
                          item.id === producto.id 
                          ? {...item, cantidad: item.cantidad +1 } 
                          : item
      );

      setTotal(total + producto.precio * producto.cantidad);
     
      setCountProductos(countProductos+ producto.cantidad);

      return setListaProductos([...productos]);
    }

    //Calcular total
    setTotal(total + producto.precio * producto.cantidad);
    //Cantidad productos
    setCountProductos(countProductos + producto.cantidad);
    // Productos
    setListaProductos([...listasProductos, producto]);
  };

   console.log(listasProductos);


  let datos = [
    {
      id:1,
      nombre: 'Nike Zero',
      precio: 34000,
      cantidad: 1,
    },

    {
      id: 2,
      nombre: 'Adidas Neo',
      precio: 10000,
      cantidad: 1,
    },

    {
      id: 3,
      nombre: 'Topper',
      precio: 10000,
      cantidad: 1,
    },

    {
      id: 4,
      nombre: 'Nike New Era',
      precio: 10000,
      cantidad: 1,
    },

    {
      id: 5,
      nombre: 'Converse',
      precio: 10000,
      cantidad: 1,
    },

    {
      id: 6,
      nombre: 'Reebok Classic',
      precio: 10000,
      cantidad: 1,
    },
  ];  

  return (  
    <div className="card-main">
      {datos.map(producto => (
        <div key={producto.id} className="card-info">
          <p><strong>{producto.nombre}</strong></p>
          <p>${producto.precio}</p>
          <button onClick={() => agregarProductos(producto)}>Añadir al carrito</button>
        </div>
      ))} 
    </div>
  );
}