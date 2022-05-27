import React, {useState} from "react";
import {useParams} from "react-router";


const ItemDetail = ({producto}) => {

    console.log('id Del producto: ', producto.id);

    return (
        <>
            <div>
                <div>
                    <h1>Detalle de Producto</h1>
                </div>

                <div>
                    <h3>ID:  {producto.id}</h3>
                    <h3>PRODUCTO:  {producto.name}</h3>
                    <h3>DESCRIPCION: {producto.descripcion}</h3>
                    <h3>STOCK: {producto.stock}</h3>
                </div>
            </div>
        </>
    );

};
export default ItemDetail;