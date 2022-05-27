import React from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import RopaCard from "./RopaCard";

export default function Item({item}){

    return (
        <>
            <RopaCard data={item}></RopaCard>

            </>
    );
}