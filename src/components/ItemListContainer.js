import React, {useEffect, useState} from "react";
import ItemCount from "./ItemCount";
import Item from "./Item";
import ItemList from "./ItemList";
import {traerProductos, traerUnProducto} from "../data/productos";
import {useParams} from "react-router";

export default function ItemListContainer({greeting}){

    const [productos, setProductos] = useState([]);

    const {category} = useParams();

    console.log("Categoria: " + category)

    useEffect(() => {
        traerProductos(category).then((res) => {
            setProductos(res);
        })
            .catch((error) => console.log(error));
    }, [category]);


    return (
        <>
            <ItemList items={productos}></ItemList>

        </>
    );
}