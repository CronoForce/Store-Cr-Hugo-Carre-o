import React, {} from "react";
import "./item.css"
import ItemCount from '../ItemCount/ItemCount'

function Item(){
    return(
        <div className='container-item'>
            <div className='container-item__greeting'>
                <img src="https://i.ibb.co/BP0W354/audifonos.png" alt="audifonos" />
                <div className='container-item__greeting__text'>
                    <ItemCount />
                </div> 
            </div>
        </div>
    )
}

export default Item;