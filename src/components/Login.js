import React,{useState} from 'react';
import LoginModal from './LoginModal';
import { Link } from 'react-router-dom';

const Login = () => {
    const [modal,setModal] = useState(false)
    const showModal = ()=>{
        setModal(true);
        document.body.classList.add("overflow");
        //document.getElementById("register").remove();
        document.querySelector(".modal").classList.remove("hide");
    }
    return (
        <div className='m-2'>
            <Link to="#login">
                <button className='btn'>Connexion</button>
            </Link>
        </div>
        
    );
};

export default Login;