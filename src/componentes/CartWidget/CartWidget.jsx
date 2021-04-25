import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
    return(
        <div className='car'>
            <div className='circle-num'>
                <p className='num-float'></p>
            </div>
            <i className="fas fa-cart-plus"></i>
        </div>
    )
}

export default CartWidget