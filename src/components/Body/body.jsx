import React from "react";
import "./body.css";
import ItemListContainer from '../ItemListContainer/ItemListContainer';

function Body() {
    return (
        <div className='body-container'>
            <h2 className='title-home'>Productos</h2>
            <div className='body-container__items'>
                <ItemListContainer />
                <ItemListContainer />
                <ItemListContainer />
                <ItemListContainer />
            </div>
        </div>
    )
}

export default Body;