

function Header({ listasProductos, setListaProductos, total, countProductos }) {

    return (
      <div>
        <header>
            <div className='cart-style'>
              <h1>Mi carrito</h1>
              <div>{countProductos}</div>     
              <div>{listasProductos.map(producto => (
                <div key={producto.id} className='info-product'>
                  <p>{producto.nombre}</p>
                  <p>${producto.precio}</p>
                  <p>{producto.cantidad}</p>
                </div>  
                ))}
              </div>
              <div>
                <h2>Total</h2>
                <p>${total}</p>
              </div>
            </div>
        </header>
      </div>
    );
}

export default Header;