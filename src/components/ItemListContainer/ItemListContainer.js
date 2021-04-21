import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {

    

    const [user, setUser] = useState([])

    useEffect(() => {
        obtenerUser()
    }, [])

    const obtenerUser = async () => {
        const data = await fetch("https://fakestoreapi.com/products/category/women's%20clothing");
        const users = await data.json()
        setUser(users)
    }

    return(

        <ItemList data={user} />
        
    )

}

export default ItemListContainer;