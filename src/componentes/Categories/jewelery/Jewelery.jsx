import React, { useState, useEffect, Fragment } from 'react';
import ItemList from '../../Body/ItemList/ItemList';
import './Jewelery.css'

const Jewelery = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        const data = await fetch("https://fakestoreapi.com/products/category/jewelery");
        const itemProduct = await data.json()
        setProduct(itemProduct)
    }

    return(

        <Fragment>
        <div className='jewerely'>
            <h2>jewelery</h2>
        </div>
          <ItemList data={product} />
        </Fragment>
        
    )

}

export default Jewelery;