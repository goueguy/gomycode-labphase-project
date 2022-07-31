import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='border-top'>
            <ul className='d-flex justify-content-center'>
                <li><Link to={"#"}>Catégories</Link></li>
                <li><Link to={"#"}>Vêtements</Link></li>
                <li><Link to={"#"}>Accéssoires</Link></li>
                <li><Link to={"#"}>Chaussures</Link></li>
            </ul>
        </div>
    );
};

export default Menu;