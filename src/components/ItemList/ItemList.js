import React, { Fragment } from "react";
import Item from "../Item/Item"

const ItemList = ({data}) =>{
    return(
        <Fragment>
            <div className="ItemList">
                {data.map((data) => {
                    return(
                        <Item key={data.id} name={data.name} username={data.username} email={data.email}/>
                    )
                })}
            </div>
        </Fragment>
    )
}

export default ItemList;