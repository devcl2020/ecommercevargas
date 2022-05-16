import React from "react";
import ItemCount from "./ItemCount";
import Item from "./Item";
import ItemList from "./ItemList";

export default function ItemListContainer({greeting}){
let productos
    const task = new Promise((resolve, reject)=>{
         productos = [{id:123, name:"producto1", descripcion: "descrProd", stock: 5},
             {id:234, name:"producto2", descripcion: "descrProd2", stock: 10}]
        setTimeout(()=>{
            resolve(productos)
        }, 2000)

        task.then((res)=>{
            console.log({productos})
        })

    })


    return (
        <>
            <ItemList items={productos}></ItemList>

        </>
    );
}