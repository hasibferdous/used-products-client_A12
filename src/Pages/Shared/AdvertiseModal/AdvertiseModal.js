import React from 'react';
import { Link } from 'react-router-dom';

const AdvertiseModal = ({ title, message, img, successButtonName, closeModal1, modalData, successAction }) => {

  
    return (
        <div>
            <input type="checkbox" id="confirmation-modal1" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <img src='https://img.freepik.com/free-vector/mega-sale-pine-green-abstract-background-professional-multipurpose-design-banner_1340-17396.jpg?w=996&t=st=1669756558~exp=1669757158~hmac=bed890b2bbea6244d48d2a897cd5a7c0dcd8d3f8d81ebda1f24a7c65723f8c29'></img>
                    <div className="modal-action">
                        <label 
                        onClick={() => successAction(modalData)} 
                        htmlFor="confirmation-modal1" 
                        
                        className="btn btn-primary"><Link to='/'>{successButtonName}</Link></label>
                        <button onClick={closeModal1} className='btn btn-outline'>cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseModal;
