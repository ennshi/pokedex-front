import React, {useContext} from 'react';
import {ModalContext} from '../../../contexts/ModalContext';

const Modal = ({ children }) => {
    const { toggleShowModal } = useContext(ModalContext);
    return (
        <section>
            <div>
                <button onClick={toggleShowModal}>&times;</button>
            </div>
            { children }
        </section>
    );
};

export default Modal;
