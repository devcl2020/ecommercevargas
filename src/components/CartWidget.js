import React from "react";
import cartIcon from '../images/shopping-cart-icon.png';
import ItemListContainer from "./ItemListContainer";

export default function CartWidget(){
    return (
        <>
            <div>
                <ItemListContainer greeting = "Usuario"></ItemListContainer>
            </div>
        </>
    );

}