import React from 'react'
import './Principal.css'
import polabanner from '../assets/bannermujer.jpg'
import Productos from './Productos'
import cartera1 from '../assets/cartera1.png'
import cartera2 from '../assets/cartera2.png'
import aros from '../assets/aros.png'

function Principal() {
    return (
        <div className='principal'>
            <div className='principal__container'>
                <img
                className='principal__banner'
                src={polabanner} 
                alt="banner pola"
                />

                <div className='principal__row'> 
                    <Productos nombre='Cartera de cuero' precio='800' img={cartera1}/> 
                    <Productos nombre='Cartera azul' precio='950' img={cartera2}/>
                    <Productos nombre='Aros de plata' precio='1500' img={aros}/>
                    <Productos nombre='Cartera de cuero' precio='800' img={cartera1}/> 
                    <Productos nombre='Cartera azul' precio='950' img={cartera2}/>
                    <Productos nombre='Aros de plata' precio='1500' img={aros}/>
                    <Productos nombre='Cartera de cuero' precio='800' img={cartera1}/> 
                    <Productos nombre='Cartera azul' precio='950' img={cartera2}/>
                    <Productos nombre='Aros de plata' precio='1500' img={aros}/>
                    <Productos nombre='Cartera de cuero' precio='800' img={cartera1}/> 
                    <Productos nombre='Cartera azul' precio='950' img={cartera2}/>
                    <Productos nombre='Aros de plata' precio='1500' img={aros}/>
                </div>
            </div>
        </div>
    )
}

export default Principal
