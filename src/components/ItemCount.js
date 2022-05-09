import React, {useState} from "react";

export default function ItemCount({stock, initial, onAdd}){
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="itemCount col-12">
                <p className="productName">Producto</p>
                <div className="counter">
                    <button className="countButton" onClick={()=> setCount(count - 1)}>-</button>
                    <p className="count"></p>
                    <button className="countButton" onClick={()=> setCount(count + 1)}>+</button>
                </div>
                <h2>{count}</h2>
                <button className="agregarButton">AGREGAR</button>
            </div>

        </>
    );
}