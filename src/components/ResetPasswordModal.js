import React from 'react';
import { Link,  useNavigate } from 'react-router-dom';

const ResetPasswordModal = () => {
    const navigate = useNavigate();
    const closeModal = ()=>{
        document.body.classList.remove("overflow");
        navigate("/");
    }
    
    return (
        <>  
            <div className="modal" id="login">
                <div className="modal-container">
                    <div className="modal-content">
                        <div className="modal-header d-flex justify-content-between">
                            <h5 className='modal-title'>Mot de passe</h5>
                            <button type='button' className='btn-close' onClick={closeModal}>X</button>
                        </div>
                        <div className="modal-body">
                            <div className='input-group'>
                                <div className="form-group">
                                    <input type="password" name="password" className="form-control" placeholder='Ancien mot de passe' />
                                </div>
                                <div className="form-group">
                                    <input type="password" name="new-password" className="form-control" placeholder='Nouveau mot de passe' />
                                </div>
                                <div className="form-group">
                                    <input type="password" name="confirmation-password" className="form-control" placeholder='Confirmer Mot de passe' />
                                </div>
                            </div>
                            <div className="btn-submit">
                                <button className="btn btn-block btn-active" type="button">Valider</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResetPasswordModal;