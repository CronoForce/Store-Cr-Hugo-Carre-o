import React from "react";
import "./ItmeListContainer.css";
import ItemCount from '../ItemCount/ItemCount'

function Saludo() {
    return (
        <div className='listcontainer'>
            <div className='container-item'>
                <div className='container-item__greeting'>
                    <img src="https://i.ibb.co/BP0W354/audifonos.png" alt="audifonos" />
                    <div className='container-item__greeting__text'>
                        <p className='price'>USD $200</p>
                        <p className='description'>Lorem ipsum dolor sit.</p>
                        <ItemCount />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Saludo;