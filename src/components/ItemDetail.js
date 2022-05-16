import React, {useState} from "react";
import {useParams} from "react-router";


const ItemDetail = () => {

    let id = useParams();

    console.log('id Del producto: ' , id);
    const [producto, setProducto] = useState([]);


    // let productos;
    // const task = new Promise((resolve, reject) => {
    //     productos = [{id: 123, name: "producto1", descripcion: "descrProd", stock: 5}]
    //     setTimeout(() => {
    //         resolve(productos)
    //     }, 2000)
    //
    //     task.then((res) => {
    //         console.log({productos})
    //     })
    //
    //
    // });
    return <div>ItemDetail {id.id}</div>

}
export default ItemDetail;