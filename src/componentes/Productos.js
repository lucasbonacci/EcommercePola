import React from 'react'
import './Producto.css'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function Productos({nombre, precio, img}) {
    return (
        <div className='producto'>
            <div className='producto__info'>
                <p> {nombre}</p>
                <p className='producto__precio'> 
                    <small>$</small>
                    <strong>{precio}</strong>
                </p>
            </div>
            <img 
            src={img}
            alt='Cartera de cuero negra'/> 
            <button> < AddShoppingCartIcon/></button>
        </div>
    )
}

export default Productos
