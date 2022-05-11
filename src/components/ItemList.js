import React from "react";
import ItemCount from "./ItemCount";
import Item from "./Item";
import * as PropTypes from "prop-types";
import styled from 'styled-components';



export default function ItemList({items}){

    const Styles = styled.div`
 table {
   border-spacing: 0;
   border: 1px solid black;

   tr {
     :last-child {
       td {
         border-bottom: 0;
       }
     }
   }

   th,
   td {
     padding: 0.5rem;
     border-bottom: 1px solid black;
     border-right: 1px solid black;

     :last-child {
       border-right: 0;
     }
   }
  
   th {
     background: black;
     border-bottom: 3px solid blue;
     color: white;
     fontWeight: bold;
   }
 }
`

    return (
        <div>
            <h1>PRODUCTOS</h1>
            <Styles>
                <table style={{
                //display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '9vh'
            }}>
                <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>DESCRIPCION</th>
                    <th>STOCK</th>
                </tr>
                {items.map((value)=><Item item = {value}></Item>)}

            </table>
                </Styles>

        </div>
    );
}