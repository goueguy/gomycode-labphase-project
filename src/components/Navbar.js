import React from 'react';
import SearchProduct from "./SearchProduct";
import Money from "./Money";
import Language from "./Language";
import Login from "./Login";
import Register from "./Register";
import logo from "../assets/icones/logo.png";

const Navbar = () => {
    return (
        <>
            <SearchProduct/>
            {/*<img src={logo} alt="Logo"/>*/}
            <h1>EASY SHOP</h1>
            <div className='d-flex justify-content-between'>
                <Language/>
                <Money/>
                <Login/>
                <Register/>
            </div>
        </>
    );
};

export default Navbar;