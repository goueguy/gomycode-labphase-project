import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <p className="copyright">Tous droits réservés par © <Link to={"#"}>Easy-shop</Link></p>
        </footer>
    );
};

export default Footer;