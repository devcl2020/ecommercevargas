
import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from './NavbarElements';
import cartIcon from "../../images/shopping-cart-icon.png";


function NavBar() {
    return (
        <>
            <Nav>

                <Bars />
                <NavMenu>
                    <NavLink to='/productos' activeStyle>
                        Productos
                    </NavLink>
                    <NavLink to='/servicios' activeStyle>
                        Servicios
                    </NavLink>
                    <NavLink to='/contacto' activeStyle>
                        Contacto
                    </NavLink>
                    <NavLink to='/salir' activeStyle>
                        Salir
                    </NavLink>
                </NavMenu>
                <NavLink  to='/carrito' activeStyle>
                    <img src={cartIcon}  alt='logo' height={50}/>
                </NavLink>
            </Nav>
        </>
    );
}

export default NavBar;
