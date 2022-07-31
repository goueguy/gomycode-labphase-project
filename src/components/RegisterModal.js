import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';

const RegisterModal = () => {
    const [modal,setModal] = useState(false)
    const closeModal = ()=>{
        //document.getElementById("login").classList.add("hide");
        document.getElementById("register").classList.add("hide");
        //setModal(true);
        //document.getElementById("login").classList.add("hide");
        document.body.classList.remove("overflow");
    }
    const showModalRegister = ()=>{
        console.log("ok")
    }
    const showLoginModal = (e)=>{
        e.preventDefault();
        setModal(true);
        document.getElementById("register").remove();
    }
    return (
        <>
            <div className='modal' id="register">
                <div className="modal-container">
                    <div className="modal-content">
                        <div className="modal-header d-flex justify-content-between">
                            <h5 className='modal-title'>Inscription</h5>
                            <button type='button' className='btn-close' onClick={closeModal}>X</button>
                        </div>
                        <div className="modal-body">
                            <div className='info'>
                                <p>Vous avez un compte ? <Link to={"#"} onClick={(e)=>showLoginModal(e)} className="font-weight-bold">Connectez-vous</Link></p>
                            </div>
                            <div className="authenfication-btn d-flex justify-content-between">
                                <button className='bg-white social-network-btn btn-google'><i className='fab fa-google-plus-g'></i> Connexion avec Google</button>
                                <button className='bg-blue social-network-btn btn-facebook'><i className='fab fa-facebook-f'></i> Connexion avec Facebook</button>
                            </div>
                            <p className="divider">ou</p>
                            <div className='input-group'>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="prenoms" placeholder='Prénoms' />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="nom" placeholder='Nom' />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" name="email" placeholder='Adresse Email' />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" name="password" placeholder='Mot de passe' />
                                </div>
                                <div className="form-group">
                                    <select name="pays" id="pays" className='form-control'>
                                        <option value="">--Choisir Pays--</option>
                                        <option value="Nigéria">Nigéria</option>
                                        <option value="Cameroun">Cameroun</option>
                                        <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                                        <option value="Gabon">Gabon</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <select name="ville" id="ville" className='form-control'>
                                        <option value="">--Choisir Ville--</option>
                                        <option value="Lagos">Lagos</option>
                                        <option value="Yaoundé">Yaoundé</option>
                                        <option value="Abidjan">Abidjan</option>
                                        <option value="Libreville">Libreville</option>
                                    </select>
                                </div>
                            </div>
                            <div className="btn-submit">
                                <button className="btn btn-block btn-active" type="button">Se connecter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                (modal) ? <LoginModal/>:""
            }
        </>
    );
};

export default RegisterModal;