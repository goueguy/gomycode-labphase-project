import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import RegisterModal from './RegisterModal';

const LoginModal = () => {
    const [modal,setModal] = useState(false)
    const closeModal = ()=>{
        document.getElementById("login").classList.add("hide");
        setModal(false);
    }
    const showModalRegister = (e)=>{
        e.preventDefault();
        setModal(true);
        document.getElementById("login").remove();
    }
    return (
        <>
            <div className='modal' id="login">
            <div className="modal-container">
                <div className="modal-content">
                    <div className="modal-header d-flex justify-content-between">
                        <h5 className='modal-title'>Connexion</h5>
                        <button type='button' className='btn-close' onClick={closeModal}>X</button>
                    </div>
                    <div className="modal-body">
                        <div className='info'>
                            <p>Vous n'avez pas de compte ? <Link to={"#"} onClick={(e)=>showModalRegister(e)} className="font-weight-bold">Inscrivez-vous</Link></p>
                        </div>
                        <div className="authenfication-btn d-flex justify-content-between">
                            <button className='bg-white social-network-btn btn-google'><i className='fab fa-google-plus-g'></i> Connexion avec Google</button>
                            <button className='bg-blue social-network-btn btn-facebook'><i className='fab fa-facebook-f'></i> Connexion avec Facebook</button>
                        </div>
                        <p className="divider">ou</p>
                        <div className='input-group'>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder='Adresse Email' />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder='Mot de passe' />
                            </div>
                        </div>
                        <div className="btn-submit">
                            <button className="btn btn-block btn-active" type="button">Se connecter</button>
                        </div>
                        <div>
                            <Link to={"#"} className="password-reset">Mot de passe oublié</Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            {
                (modal) ? <RegisterModal/>:""
            }
        </>
    );
};

export default LoginModal;