import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <Link to="register">
                <button className='btn btn-active'>Inscription</button>
            </Link>
        </div>
    );
};

export default Register;