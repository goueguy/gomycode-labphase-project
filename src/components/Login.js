import React,{useState} from 'react';
import LoginModal from './LoginModal';

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
            <button className='btn' onClick={showModal}>Connexion</button>
            {
                (modal) ? <LoginModal/>:""
            }
        </div>
        
    );
};

export default Login;