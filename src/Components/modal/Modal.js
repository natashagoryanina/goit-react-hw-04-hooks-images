import React from 'react';
import { ModalContainer } from './ModalStyled';

const Modal = ({toggleModal, image}) => {
    const closeModal = (e) => {
        if(e.target === e.currentTarget) {
            const overlay = document.querySelector('.Overlay');
            overlay.style.opacity = '0';
            toggleModal();
        };
    };

    return (
        <ModalContainer>
            <div className="Overlay" onClick={closeModal}>
                <div className="Modal">
                    <img src={image.largeImageURL} alt={image.tags} key={image.id}/>
                </div>
            </div>
        </ModalContainer>
    );
};

export default Modal;

