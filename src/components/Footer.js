import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <p className="copyright">Tous droits réservés par © <Link to={"#"}>LMC-shop</Link></p>
        </footer>
    );
};

export default Footer;