import React from "react";
import ItemCount from "./ItemCount";
import Item from "./Item";
import * as PropTypes from "prop-types";
import styled from 'styled-components';
import {Link} from "react-router-dom";
import './ItemList.css';



export default function ItemList({items}) {

    return (
        <div className='ItemList-container'>
                    {items.map((value) =>
                        <Link to={`/detail/${value.id}`}>
                            <Item item={value}></Item>
                        </Link>
                    )}
        </div>
    );
}