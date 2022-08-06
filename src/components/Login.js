import React,{useState} from 'react';
import LoginModal from './LoginModal';
import { Link, Outlet } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className='m-2'>
                <Link to="login">
                    <button className='btn'>Connexion</button>
                </Link>
            </div>
            <Outlet/>
        </>
        
        
    );
};

export default Login;