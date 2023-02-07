import React from 'react';
import NavbarComp from '../components/NavbarComp';
import TableComp from '../components/TableComp';
import ModalComp from '../components/ModalComp';
import { AuthContext } from '../context/AuthContext';

const BarangPage = () => {
    const {isLogin} = React.useContext(AuthContext);
    return (
        <>
            <NavbarComp isLogin={isLogin} />
            <div className="container">
                <ModalComp/>
                <TableComp />
            </div>
        </>
    )
}

export default BarangPage;