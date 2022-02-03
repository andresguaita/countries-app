import React from 'react';
import { useSelector } from 'react-redux';

import './Modal.css'

export const Modal = ({ children, modalOpen, setModalOpen }) => {

    

    const handleModalChange = () =>{
        setModalOpen(!modalOpen)
    }
    return (
        <>
            {modalOpen &&
            <div className='modal'>

                <div className='modal__contain'>
                    <div className='modal__header'>
                        <h3>Activity</h3>
                    </div>
                    <div className='modal__button' onClick={handleModalChange}>
                    <img src='assets/cross-icon.svg' alt='city'className='cross__addactivity' />
                    </div>
                    {children}
                </div>
            </div>}
        </>

    );
};
