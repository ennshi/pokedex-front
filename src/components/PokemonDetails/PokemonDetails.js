import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from '../common/modal/Backdrop';
import Modal from '../common/modal/Modal';

const PokemonDetails = () => {
    return ReactDOM.createPortal(
        <Backdrop>
            <Modal>
                Pokemon Details
            </Modal>
        </Backdrop>,
        document.getElementById('modal-root')
    );
};

export default PokemonDetails;
