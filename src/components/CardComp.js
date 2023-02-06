import React from 'react';
import { Link } from "react-router-dom";

const CardComp = ({title, description, domisili, alamat, img, idToko}) => {
    return (
        <div className="card my-3">
            <img src={img} alt={title} className='card-img-top' />
            <div className="card-body">
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
            <ul className='list-group list-group-flush'>
                <li className="list-group-item">Domisili: {domisili} </li>
                <li className="list-group-item">Alamat: {alamat} </li>
            </ul>
            <div className="card-body">
                <Link to={`/barang`} className="btn btn-danger">
                    Daftar Barang
                </Link>
            </div>
        </div>
    );
}

export default CardComp;