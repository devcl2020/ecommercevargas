import React from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

export default function Item({item}){

    return (
        <>
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.descripcion}</td>
                <td>{item.stock}</td>
            </tr>

        </>
    );
}