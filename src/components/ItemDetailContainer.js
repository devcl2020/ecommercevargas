import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import {traerUnProducto} from "../data/productos";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({});

    useEffect(() => {
        traerUnProducto().then((res) => {
            setProducto(res);
        })
            .catch((error) => console.log(error));
    }, []);


    return (
        <>
            <div>
                <ItemDetail producto={producto}/>
            </div>
        </>
    );

}
export default ItemDetailContainer;


