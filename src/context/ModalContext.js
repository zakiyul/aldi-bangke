import { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({children}) => {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const contextData = {
        show,
        handleClose,
        handleShow
    }

    return (
        <ModalContext.Provider value={contextData}>
            {children}
        </ModalContext.Provider>
    )
}