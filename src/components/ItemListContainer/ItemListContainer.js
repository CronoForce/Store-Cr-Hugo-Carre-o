import React, { useEffect, useState } from "react";
import "./ItmeListContainer.css";
import ItemList from "../ItemList/ItemList";

const ItmeListContainer = () => {

    

    const [user, setUser] = useState([])

    useEffect(() => {
        console.log('useEffect');
        obtenerUser()
    }, [])

    const obtenerUser = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await data.json()
        console.log(users)
        setUser(users)
    }

    return(
        <ItemList data={user} />
    )

}

export default ItmeListContainer;