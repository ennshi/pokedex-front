import React, {useState} from 'react';

export const ModalContext = React.createContext({});

export const ModalContextProvider = ({children}) => {
    const [showModal, setShowModal] = useState(false);
    const root = document.getElementById('root');
    const toggleShowModal = () => {
        root.style.position = (root.style.position === 'fixed') ? '' : 'fixed';
        setShowModal((prevState) => (!prevState));
    };
    return (
        <ModalContext.Provider value={{showModal, toggleShowModal}}>
            {children}
        </ModalContext.Provider>
    );
};
