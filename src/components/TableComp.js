import React from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { ModalContext } from '../context/ModalContext'

const TableComp = () => {
    const { isLogin } = React.useContext(AuthContext);
    const {handleShow, show} = React.useContext(ModalContext);
    const [products, setProducts] = React.useState();
    const getProducts = async () => {
        console.log('ini adalah show modal');
        console.log(show)
        const res = await axios.get('https://fajartimur.com/api/items/');
        setProducts(res.data.results)
    }

    React.useEffect(() => {
        getProducts()
    },[])

    return (
        <div className="card">
      <div className="card-header">
        {!isLogin && <button className="btn btn-primary">
          Tambah
        </button> }
        
      </div>
      <div className="card-body">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Merk</th>
              <th>Warna</th>
              <th>Stok</th>
              <th>Harga</th>
              {!isLogin && <th>Action</th> }
              
            </tr>
          </thead>
          <tbody>
            {products && products.map((d) => {
              return (
                <tr>
                  <td>{d.id}</td>
                  <td>{d.title.slice(0, 150)}</td>
                  <td>{d.id}</td>
                  <td>{d.slug}</td>
                  <td>
                      {d.price}
                  </td>
                  {!isLogin && <td>
                    <button onClick={handleShow} className="btn btn-primary">Edit</button>
                    <button className="btn btn-danger ms-3">Delete</button>
                  </td> }
                  
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    )
}

export default TableComp;