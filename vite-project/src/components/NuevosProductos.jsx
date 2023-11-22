import '../css/NuevosProductos.css';
import { useState } from "react";


export default function NuevosProductos({ onDatosRecibidos }) {

    const [formData, setFormData] = useState(
      {
        producto: '',
        precio: '',
      });

    
    function handleProducto(event) {
        setFormData((prevForm) => ({
          ...prevForm, 
          producto: event.target.value
        }));
    }
    
    function handlePrecio(event) {
        setFormData((prevForm) => ({
          ...prevForm, 
          precio: event.target.value
        }));    
    }

    console.log(formData.producto, formData.precio);



    function submit(event) {
      event.preventDefault();


      if (formData.precio > 0) {
        alert("Ha ingresado su producto: ");

        if (onDatosRecibidos) {
          onDatosRecibidos(formData.producto, formData.precio);
        }
      } else {
        alert("Es incorrecto!");
      }
    };

  return (
        <div>
          <form action="" onSubmit={submit} className="form-container">
            <label htmlFor="">Nombre del producto</label>
            
            <input type="text" 
                  name="producto"
                  value={formData.producto}
                  onChange={handleProducto}
                  className="form-input" 
                  />
            
            <label htmlFor="">Precio</label>
            
            <input type="text" 
                  name="precio"
                  value={formData.precio}
                  onChange={handlePrecio}    
                  className="form-input"
                  />
            <button type="submit" className="form-button">Enviar</button>
          </form>
        </div>
  );
}