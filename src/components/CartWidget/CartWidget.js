import React from 'react';
import './CartWidget.css';

function CartWidget(){
    return(
        <div className="Car">
            <div className='circel-num'>
                <p className='num-float'>0</p>
            </div>
            <i className="fas fa-cart-plus"></i>
        </div>
    )
}

export default CartWidget