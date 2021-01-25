import React, {useContext} from 'react';
import {ModalContext} from '../../../contexts/ModalContext';
import './Modal.css';

const Modal = ({ children }) => {
    const { toggleShowModal } = useContext(ModalContext);
    return (
        <section className="modal__container">
            <div className="modal__close-container">
                <button
                    onClick={toggleShowModal}
                    className="btn-close"
                >
                    &times;
                </button>
            </div>
            { children }
        </section>
    );
};

export default Modal;
