import React, { Fragment, useEffect, useState } from "react";
import "./ItmeListContainer.css";
import ItemList from "../ItemList/ItemList";
import { render } from "@testing-library/react";

const ItmeListContainer = () => {

    

    const [user, setUser] = useState([])

    useEffect(() => {
        console.log('useEffect');
        obtenerUser()
    }, [])

    const obtenerUser = async () => {
        const data = await fetch('https://fakestoreapi.com/products/category/women%20clothing');
        const users = await data.json()
        setUser(users)
    }

    return(

        <ItemList data={user} />
        
    )

}

export default ItmeListContainer;