
import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from './NavbarElements';
import cartIcon from "../../images/shopping-cart-icon.png";
import logo from "../../images/logo.svg";


function NavBar() {
    return (
        <>
            <Nav>
                <Bars />
                <NavLink to='/' activeStyle>
                    <img src={logo}  alt='logo' height={50}/>
                </NavLink>
                <NavMenu>
                    <NavLink to='/category/poleras' activeStyle>
                        Poleras
                    </NavLink>
                    <NavLink to='/category/pantalones' activeStyle>
                        Pantalones
                    </NavLink>
                    <NavLink to='/category/corbatas' activeStyle>
                        Corbatas
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
